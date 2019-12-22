import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [UtilsService]
})
export class ContactComponent implements OnInit {

  public client: object;
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
  }

  toggleInput(e) {
    if (e.target.classList.contains('input--actived')) {
      e.target.classList.remove('input--actived');
    } else {
      e.target.classList.add('input--actived');
    }
  }

  sendContactForm(email: object) {
    this.utilsService.sendContactForm(email).subscribe(
      result => {
        alert(result);
      },
      error => {
        alert(error);
      }
    );
  }

}
