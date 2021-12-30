import { Component, Input, OnInit } from "@angular/core";
import { ProjectEntry } from "../../../interfaces/project";
import { api } from "../../global/variable.global";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: ProjectEntry;
  public url = api.cockpit;
  public showDescription = false;
  private options: any;

  constructor() {}

  ngOnInit() {}

  toggleShowDescription(e: MouseEvent) {
    this.showDescription = !this.showDescription;
    const overlay = document.getElementById(`overlay${this.project._id}`);
    if (this.showDescription) {
      return (overlay.style.transform = "translateY(0%)");
    }
    overlay.style.transform = "translateY(-100%)";
  }

  activedOption(e: any) {
    this.options = document.querySelectorAll(".select__link");
    this.options.forEach((option) => {
      if (option.classList.contains("select__link--actived")) {
        option.classList.remove("select__link--actived");
      }
    });
    e.target.classList.add("select__link--actived");
  }
}
