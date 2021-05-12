import { AnnoncesService } from './../services/annonces.service';
import { Annonce } from './../models/annonce';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.page.html',
  styleUrls: ['./update-annonce.page.scss'],
})
export class UpdateAnnoncePage implements OnInit {

  editForm = new FormGroup({
    titre: new FormControl('')
  });
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
      this.editForm.patchValue(this.annonce);
    })

  }

  onUpdate() {
    const data = {
      ...this.editForm.value,
      id: this.id
    }
    this.annoncesService.updateAnnonce(data).subscribe(response => {
      this.editForm.reset;
      this.annoncesService.editannonce$.next(response);
      this.nav.pop();
    })
  }
}
