import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  str = '';

  isEmpty(): boolean {
    return this.username == '' ? true : false;
  }

  onTextEntered(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onClickResetUsername() {
    this.username = '';
  }
}
