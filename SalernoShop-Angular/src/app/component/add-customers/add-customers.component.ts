import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  nations!: MenuItem[];
  CustomerForm!: FormGroup;

  username!: string; 
  idnumber!: string;
  nation!: string;
  phonenumber!: string;
  email!: string;


  constructor() {

    this.nations = [
      { label:'Add Customer Form' }
    ];
   
   }

  ngOnInit(): void {
    this.CustomerForm = new FormGroup({
      'cname' : new FormControl(null, Validators.required),
      'cid' : new FormControl(null, Validators.required),

      'cphone' : new FormControl(null, 
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ),
      
      'cmail' : new FormControl(null, 
        [
          Validators.required,
          Validators.email
        ]
      ),

      'cdesc' : new FormControl(null)
    });

  }

  get cname() {
    let cname = this.CustomerForm.get('cname');
    return cname?.invalid && cname.touched;
  }

  get cid() {
    let cid = this.CustomerForm.get('cid');
    return cid?.invalid && cid.touched;
  }

  get cphone() {
    let cphone = this.CustomerForm.get('cphone');
    return cphone?.invalid && cphone.touched;
  }

  get cmail() {
    let cmail = this.CustomerForm.get('cmail');
    return cmail?.invalid && cmail.touched;
  }

  addCustomer() {
    
  }

  onDrag(event: any){}

}
