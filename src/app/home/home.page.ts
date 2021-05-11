import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }



  goToTeam() {
    this.navCtrl.navigateForward("/team");
  }


  annonces = [

    {
      titre: 'Huawei',
      description: 'Best Phone',
      image: 'assets/huawei2.jpg'

    }
    ,
    {
      titre: 'Samsung',
      description: 'Best Phone',
      image: 'assets/samsung3.jpg'

    }
    , {
      titre: 'iPhone',
      description: 'Best Phone',
      image: 'assets/iphone3.jpg'
    }
    , {
      titre: 'Oppo',
      description: 'Best Phone',
      image: 'assets/oppo2.jpg'
    }
  ]
}
