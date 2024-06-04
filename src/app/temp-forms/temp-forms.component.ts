import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.css']
})
export class TempFormsComponent implements OnInit{
  ngOnInit(){
this.getData();
  }
  submit(formsdata:any){
console.warn(formsdata);
  }

  p = new Promise((res:any,reject:any)=>{
    setTimeout(()=>{
      reject('hello')
      console.log("HEYYYY")
    },2000);
  })

  async getData(){
    let data = await this.p;
    await console.log(data)
  }
}
