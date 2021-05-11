import { Annonce } from './../models/annonce';
import { NavController } from '@ionic/angular';
import { AnnoncesService } from './../services/annonces.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})

export class AnnoncePage implements OnInit {

  id: number;
  annonce: Annonce;
  annoncesData: any;

  constructor(public annonceService: AnnoncesService,
    private nav: NavController,
    private router: NavController) {
    this.annoncesData = [];
  }

  ngOnInit() {
    this.getAllAnnonces();
  }


  getAllAnnonces() {
    this.annonceService.getAnnonces().subscribe(response => {
      console.log(response);
      this.annoncesData = response;
    });
  }

  addAnnonce() {
    this.router.navigateForward('/add');
  }

  edit(id: number) {
    this.router.navigateForward(['update-annonce/' + id]);
  }

  delete(annonce) {
    this.annonceService.deleteAnnonce(annonce.id).subscribe(response => {
      this.getAllAnnonces();
      this.nav.pop();
    });
  }

}
