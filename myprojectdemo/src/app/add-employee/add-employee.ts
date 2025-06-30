import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HrService } from '../service/hr.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { LocationService } from '../service/location.service';
import { Location } from '../../model/location.model';


@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit{
  locations : Location[] = [];

  formGroup! : FormGroup;

  constructor(
private hrService : HrService,
private cdr : ChangeDetectorRef,
private router : Router,
private formBuilder : FormBuilder,
private locationService: LocationService


  ){}
  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({

 
    name :[''],
    designation :[''],
    department : [''],
    startDate : [''],
    address : [''],
    contact : [''],
    salary : [''],

    location : this.formBuilder.group({

      address :[''],
      image  :['']


    })

   });

   this.loadLocation();

   this.formGroup.get('location')?.get('name')?.valueChanges.subscribe(address => {
    const selectedLocation = this.locations.find(loc => loc.address === address);
    if(selectedLocation) {

      this.formGroup.patchValue({location: selectedLocation});
    }
   });
  }



 loadLocation(): void {

    this.locationService.getAllLocation().subscribe({

      next: (loc) => {
        this.locations = loc;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }

  addEmp(): void {

const emp : Employee = {...this.formGroup.value};
this.hrService.saveEmployee(emp).subscribe({

  next: (employee) => {
    console.log(employee,'added Successfully ! ');
    this.loadLocation();
    this.formGroup.reset();
    this.router.navigate(['/viewEmp']);
  },
  error: (err) => {
    console.log(err);
  }


})


  }

}
