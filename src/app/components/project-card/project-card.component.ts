import { Component, Input, OnInit } from "@angular/core";
import { ProjectEntry } from "../../../interfaces/project";
import { api } from "../../global/variable.global";
import { FunctionsService } from "../../services/functions.service";

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

  constructor(private functionsService: FunctionsService) {}

  ngOnInit() {}

  toggleShowDescription(e: MouseEvent) {
    // this.functionsService.cardActived(e);
    this.showDescription = !this.showDescription;
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
