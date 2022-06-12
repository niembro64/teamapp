import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teamapp';

  newMemberName: string = '';
  members: string[] = [];
  errorMessage = '';

  onInput = (member: string) => {
    this.newMemberName = member;
  };
  addMember = () => {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  };
}
