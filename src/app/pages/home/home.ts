import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attributes
  //title: string;
  //state: boolean;
  //constructor
  //constructor()
  /*{
    this.title='Home Angular';
    this.state=false;
  }*/
  //methods
  //ngOnInit()
  /*{

  }

  change()
  {
    //action
    this.title="Home FrontEnd";
    this.state = true;
  }*/

  //constructor (cycle de vie composant) 1 methode execute et ngOnInit 2 (initialisation composant)
  //constructor injection service et ngOnInit affectation composants
}
