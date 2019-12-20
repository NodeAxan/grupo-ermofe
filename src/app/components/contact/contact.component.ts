import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public client: object;
  public inputActived: boolean;

  constructor() {
    this.client = {
      name: '',
      lastName: '',
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

}
