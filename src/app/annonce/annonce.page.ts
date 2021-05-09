import { NavController } from '@ionic/angular';
import { AnnoncesService } from './../services/annonces.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {

  annoncesData: any;
  constructor(public annoncesService: AnnoncesService, private nav: NavController) {
    this.annoncesData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllAnnonces();
  }

  getAllAnnonces() {
    this.annoncesService.getAnnonces().subscribe(response => {
      console.log(response);
      this.annoncesData = response;
    });
  }

  addAnnonce() {
    this.nav.navigateForward('/add');
  }

  edit(id: number) {
    this.nav.navigateForward('/update' + id);
  }

  delete(annonce) {
    this.annoncesService.deleteAnnonce(annonce.id).subscribe(response => {
      this.getAllAnnonces();
      this.nav.pop();
    });
  }


}
