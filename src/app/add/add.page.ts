import { AnnoncesService } from './../services/annonces.service';
import { Annonce } from './../models/annonce';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public add: FormGroup;
  id: number;
  annonce: Annonce;
  annoncesData: any;

  constructor(public formbuilder: FormBuilder, private router: NavController, public annonceService: AnnoncesService, private nav: NavController) {
    this.add = formbuilder.group({
      titre: ["", [Validators.required, Validators.minLength(8)]],
      image: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(8)]],
      prix: ["", [Validators.required, Validators.min(1)]],
      categorie: ["", [Validators.required]],

    })
  }

  ngOnInit() {
  }

  getAllAnnonces() {
    this.annonceService.getAnnonces().subscribe(response => {
      console.log(response);
      this.annoncesData = response;
    });
  }

  onadd() {
    const data = this.add.value;
    console.log(this.add.value.titre)
    console.log(this.add.value.photo)
    this.annonceService.createAnnonce(data).subscribe((response) => {
      console.log(response)
      this.nav.pop();
    }, error => {
      alert("Oooops!");
    }
    );
  }


}