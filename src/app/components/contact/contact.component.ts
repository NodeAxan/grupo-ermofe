import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [UtilsService]
})
export class ContactComponent implements OnInit {

  public client: object;
  public formMessage: string | boolean;
  private buttonElement: HTMLElement;
  private validEmailInput: string | boolean;
  public inputActived: boolean;

  constructor(
    public utilsService: UtilsService
  ) {
    this.client = {
      name: '',
      surname: '',
      email: '',
      message: ''
    };
    this.inputActived = false;
  }

  ngOnInit() {
    this.buttonElement = document.querySelector('.btnContactForm');
  }

  toggleInput(e) {
    if (e.target.classList.contains('input--actived')) {
      e.target.classList.remove('input--actived');
    } else {
      e.target.classList.add('input--actived');
    }
  }

  disabledButton(styleClass: string) {
    this.buttonElement.className = styleClass;
    setTimeout(() => {
      this.buttonElement.className = '';
    }, 2000);
  }

  validateEmail(email): boolean {
    let expression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(email);
  }

  sendContactForm(email: any, form: NgForm) {
    if (!this.validateEmail(email.email)) {
      this.validEmailInput = 'Correo no válido';
    } else {
      this.validEmailInput = false;
      this.utilsService.sendContactForm(email).subscribe(
        result => {
          this.disabledButton('');
          this.formMessage = result;
          setTimeout(() => {
            this.formMessage = false;
          }, 2500);
          form.reset();
        },
        error => {
          this.disabledButton('');
          this.formMessage = error;
          setTimeout(() => {
            this.formMessage = false;
          }, 2500);
        }
      );
    }
  }

}
