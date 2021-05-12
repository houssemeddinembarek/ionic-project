import { AnnoncesService } from './../services/annonces.service';
import { Annonce } from './../models/annonce';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.page.html',
  styleUrls: ['./update-annonce.page.scss'],
})
export class UpdateAnnoncePage implements OnInit {
  public edit: FormGroup;
  annonce: Annonce;
  id: number;
  constructor(public formbuilder: FormBuilder,
    public annoncesService: AnnoncesService,
    public nav: NavController,
    public router: ActivatedRoute) {



  }

  ngOnInit() {
    this.id = this.router.snapshot.params["id"];
    this.annoncesService.getAnnonce(this.id).subscribe(response => {
      console.log(response);
      this.annonce = response;
      this.edit.patchValue(this.annonce);
    })

  }

  update() {
    const data = this.edit.value;
    this.annoncesService.updateAnnonce(data).subscribe(response => {
      this.edit.reset;
      this.annoncesService.editannonce$.next(response);
      this.nav.pop();
    })


  }




}
