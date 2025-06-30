import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { HrService } from '../service/hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { Location } from '../../model/location.model';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {

  id: string = '';
  employee : Employee = new Employee;
  locations: Location[] = [];

  constructor(
private hrService : HrService,
  private route : ActivatedRoute,
    private cdr : ChangeDetectorRef,
    private router : Router,
    private locationService : LocationService

  ){}


  ngOnInit(): void {
    this.loadEmployeeById();
    this.loadLocation();
  }

  loadEmployeeById() {

    this.id = this.route.snapshot.params['id'];
    this.hrService.getEmployeeById(this.id).subscribe({

      next: (emp) => {

        this.employee = emp;
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.log(err);
      }


    })




  }

  updateEmp() : void {
this.hrService.updateEmployee(this.id,this.employee).subscribe({
next: (result) => {
this.router.navigate(['/viewEmp']);


},
error: (err) => {

  console.log(err);
}





})



  }


  loadLocation(): void {
    this.locationService.getAllLocation().subscribe({

      next: (result) => {
        this.locations = result;
        this.cdr.markForCheck();
      },
      error : (er) => {
        console.log(er);
      }


    });

  }

  compareLocation(l1: Location, l2: Location): boolean {
    return l1 && l2 ? l1.id === l2.id : l1 === l2;
  }

}
