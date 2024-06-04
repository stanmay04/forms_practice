import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.css']
})
export class TempFormsComponent {
  
  submit(formsdata:any){
console.warn(formsdata);
  }
}
