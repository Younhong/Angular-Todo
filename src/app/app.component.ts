import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'angular-todo';
  name:String = "Younhong";

  constructor(){
    this.changeName("Yhong");
  }

  changeName(name:String) {
    this.name = name;
  }
}
