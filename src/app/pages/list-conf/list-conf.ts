import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-list-conf',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
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
