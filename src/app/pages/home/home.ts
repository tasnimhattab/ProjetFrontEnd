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
  list: Conference[];
  searchTitle: string;
  constructor() {}
  ngOnInit() {
    //connx with backend site
    this.list = [
      {
        title: 'conference Angular',
        description: 'web dev conference and workshop',
        date: '12-04-2027',
        nbMax: 20,
        nbResrvation: 6,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvdwBpKJtOlNYb3r7ZS5_T_g_Bfcwp50d2CJcDlCZvrtudVIYN7QA5ZQ&s=10',
      },
      {
        title: 'conference Symfony',
        description: 'web dev conference and workshop',
        date: '26-11-2026',
        nbMax: 24,
        nbResrvation: 17,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vOCNxGCrlLVhaJdtVzvNlDeS3Svj66J6JNv4VHawNFRlz_sbAJYvo6Or&s=10',
      },
      {
        title: 'conference Symfony',
        description: 'web dev conference and workshop',
        date: '27-11-2026',
        nbMax: 20,
        nbResrvation: 12,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vOCNxGCrlLVhaJdtVzvNlDeS3Svj66J6JNv4VHawNFRlz_sbAJYvo6Or&s=10',
      },
      {
        title: 'conference Angular',
        description: 'web dev conference and workshop',
        date: '12-12-2026',
        nbMax: 20,
        nbResrvation: 18,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvdwBpKJtOlNYb3r7ZS5_T_g_Bfcwp50d2CJcDlCZvrtudVIYN7QA5ZQ&s=10',
      },
    ];
  }

  participate(conf: Conference) :void
  {
    conf.nbResrvation++ ;
  }
}
