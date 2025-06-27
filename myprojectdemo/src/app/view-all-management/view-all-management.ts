import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-view-all-management',
  standalone: false,
  templateUrl: './view-all-management.html',
  styleUrl: './view-all-management.css'
})
export class ViewAllManagement implements OnInit{

  management: any;

  constructor(

    private companyService: CompanyService,


  ){}
  ngOnInit(): void {
    this.loadAllManagement();
  }

  loadAllManagement(){

this.management= this.companyService.getAllManagement();

  }



}
