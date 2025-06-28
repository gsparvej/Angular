import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Management } from '../../model/management.model';

@Component({
  selector: 'app-update-management',
  standalone: false,
  templateUrl: './update-management.html',
  styleUrl: './update-management.css'
})
export class UpdateManagement implements OnInit{

  id: string= '';
  management: Management = new Management();

  constructor(

    private companyService: CompanyService,
    private router : Router,
    private cdr : ChangeDetectorRef,
    private route : ActivatedRoute


  ){}

  ngOnInit(): void {
    this.loadManagementById();
  }

  loadManagementById(): void{

    this.id= this.route.snapshot.params['id'];
    this.companyService.getManagementById(this.id).subscribe({
        next: (res) => {

          this.management = res;
          this.cdr.markForCheck();

},
        error: (err) => {

          console.log('Not Updated', err);

}
    });

  }

  updateManage(): void{

    this.companyService.updateManagementById(this.id,this.management).subscribe({

      next: (res) => {
          console.log(res);
        this.router.navigate(['/viewManagement']);

      },
      error:(err) => {
          console.log(err);

      }



    })


  }

}
