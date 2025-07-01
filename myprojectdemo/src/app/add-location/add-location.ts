import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { Location } from '../../model/location.model';

@Component({
  selector: 'app-add-location',
  standalone: false,
  templateUrl: './add-location.html',
  styleUrl: './add-location.css'
})
export class AddLocation implements OnInit {

  formGroup !: FormGroup;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private formBuilder: FormBuilder

  ){}

  ngOnInit(): void {
this.formGroup = this.formBuilder.group({

  
address :[''],
image  :['']


});
    
  }



   addLocation(): void {
    const location : Location = {...this.formGroup.value};
    this.locationService.saveLocation(location).subscribe({
  
      next: (res) => {
  
        console.log(res,'Added Succesfully');
        this.formGroup.reset();
        this.router.navigate(['/viewLocation']);
  
      },
      error: (err) => {
  console.log(err,'Data Not Saved ! Please Check Console')
  
      }
  
  
  
    });
  
  
  
    }



}
