
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private apiService: ApiService,private router:Router) {
this.angForm = this.fb.group({
mobile: ['', [Validators.required]],
password: ['', Validators.required]
});
}
ngOnInit() {
}
postdata(angForm)
{
this.apiService.userlogin(angForm.value.mobile,angForm.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.apiService.redirectUrl ?
this.apiService.redirectUrl : '/header';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get mobile() { return this.angForm.get('mobile'); }
get password() { return this.angForm.get('password'); }
}


















































