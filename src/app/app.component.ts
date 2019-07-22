import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem Elsass ipsum vielmols, id, libero, kougelhopf commodo leo varius gewurztraminer geht\'s ornare Kabinetpapier s\'guelt elementum condimentum hopla non chambon merci vielmols Richard Schirmeck Yo dû.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Pfourtz ! tellus knack sed Salut bisamme quam. mamsell sagittis gravida Coopé de Truchtersheim Mauris porta semper Heineken météor rossbolla dignissim ante hopla  leo bissame eleifend ac flammekueche Oberschaeffolsheim tellus amet morbi sit ftomi! suspendisse sit Racing. ',
      loveIts: 1,
      created_at: Date()
    },
    {
      title: 'Encore un post',
      content: 'Oberschaeffolsheim tristique DNA, wie hoplageiss Strasbourg ornare elit dui Wurschtsalad schnaps rucksack lacus Spätzle et geïz Verdammi picon bière aliquam Gal. ',
      loveIts: -1,
      created_at: Date() 
    }
  ];

};