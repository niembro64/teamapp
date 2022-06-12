import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teamapp';

  newMember: string = '';
  members: string[] = [];

  addMember = () => {
    console.log('CLICKED');
  };
}
