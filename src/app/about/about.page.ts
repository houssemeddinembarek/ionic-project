import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }




  contact = {
    prenom: 'Houssem Eddine',
    nom: 'Mbarek',
    email: 'houssemeddinembarek@gmail.com',
    photo: 'assets/houssem.jpg'
  }

}
