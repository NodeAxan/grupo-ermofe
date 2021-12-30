import { Component, OnInit } from "@angular/core";
import { UtilsService } from "../../services/utils.service";
import ContactForm from "../../../interfaces/contact-form";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  providers: [UtilsService],
})
export class ContactComponent implements OnInit {
  public client: any;
  public formMessage: string | boolean;
  private buttonElement: HTMLElement;
  public validEmailInput: string | boolean;
  public inputActived: boolean;

  private initialFormData = {
    name: "",
    surname: "",
    email: "",
    message: "",
  };

  constructor(public utilsService: UtilsService) {
    this.client = this.initialFormData;
    this.inputActived = false;
  }

  ngOnInit() {
    this.buttonElement = document.querySelector(".btnContactForm");
  }

  disabledButton(styleClass: string) {
    this.buttonElement.className = styleClass;
    setTimeout(() => {
      this.buttonElement.className = "";
    }, 2000);
  }

  sendContactForm(data: ContactForm, $event: FormDataEvent) {
    $event.preventDefault();
    const form = new ContactForm();
    form.email = data.email;
    form.message = data.message;
    form.name = data.name;
    form.surname = data.surname;
    if (!form.validateEmail()) {
      return alert("El correo electrónico proporcionado es inválido");
    }
    this.utilsService.sendContactForm(form).subscribe(
      () => {
        this.disabledButton("");
        this.formMessage =
          "Muchas gracias por contactar con Grupo ERMOFE. Le contactaremos en breve.";
        setTimeout(() => {
          this.formMessage = false;
        }, 2500);
        this.client = this.initialFormData;
      },
      (error) => {
        this.disabledButton("");
        this.formMessage = error;
        setTimeout(() => {
          this.formMessage = false;
        }, 2500);
      }
    );

    // if (!this.validateEmail(email.email)) {
    //   this.validEmailInput = "Correo no válido";
    // } else {
    //   this.validEmailInput = false;
    //   this.utilsService.sendContactForm(email).subscribe(
    //     (result) => {
    //       this.disabledButton("");
    //       this.formMessage = result;
    //       setTimeout(() => {
    //         this.formMessage = false;
    //       }, 2500);
    //       form.reset();
    //     },
    //     (error) => {
    //       this.disabledButton("");
    //       this.formMessage = error;
    //       setTimeout(() => {
    //         this.formMessage = false;
    //       }, 2500);
    //     }
    //   );
    // }
  }
}
