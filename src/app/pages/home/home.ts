import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attributes
  title: string;
  state: boolean;
  //constructor
  constructor()
  {
    this.title='Home Angular';
    this.state=false;
  }
  //methods
  ngOnInit()
  {

  }

  change()
  {
    //action
    this.title="Home FrontEnd";
    this.state = true;
  }

}
