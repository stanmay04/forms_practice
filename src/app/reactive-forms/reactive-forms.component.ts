import { Component } from '@angular/core';
import {FormControl , FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
loginform = new FormGroup({
  username : new FormControl('',Validators.required),
  password : new FormControl('')
})

submit(){
  console.log(this.loginform.value);
}
// get username(){
//   return this.loginform.get('username')
// }
}
