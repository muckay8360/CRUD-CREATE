import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms"


@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Censuses:any = [];  
  EditForm: boolean = false;
  censuschanges: any = {};
  
  constructor(private crudService: CrudService, public fb: FormBuilder) {}
 
 
  ngOnInit(): void {
    this.crudService.Getcensus().subscribe(res => {
      this.Censuses =res;
    }); 
    
     
  }

  getCensus() {
    this.crudService.Getcensus().subscribe(res => {
      this.Censuses =res;
    }); 
  }
  onDelete(id: any): any {
    this.crudService.Deletecensus(id)
    .subscribe(res => {
    console.log(res)
  })
  location.reload();
  } 

  onUpdate(): void {
   
    const { yearofcensus, censustakername, numberofpeople, street, state, city, zipcode} = this.censuschanges;
    const updatedcensus = { yearofcensus, censustakername, numberofpeople, street, state, city, zipcode };
    this.crudService.Updatecensus(this.censuschanges._id, updatedcensus).subscribe(res => {
      this.EditForm = false;
      this.ngOnInit();
    });
   
     
  }
  onUpdateCensus(census: any): void {
    this.EditForm = true;
    this.censuschanges = { ...census };
  }


}

