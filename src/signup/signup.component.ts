
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private apiService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
name: ['', Validators.required],
mobile: ['', Validators.required]
});
}
ngOnInit() {
}
postdata(angForm)
{
this.apiService.userregistration(angForm.value.name,angForm.value.email,angForm.value.mobile,angForm.value.password,)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},
error => {
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get mobile() { return this.angForm.get('mobile'); }
}
