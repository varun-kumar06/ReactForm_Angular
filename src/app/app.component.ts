import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactForm';
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(5)]),
    address: new FormGroup({  
      doorNo: new FormControl("", [Validators.required]), 
      street: new FormControl("", [Validators.maxLength(10)]),
    }),
  });

  get name(){
    return this.myForm.get("name");
  }

  
  get doorNo() {
    return this.myForm.get("doorNo");
  }

  submit(){
    console.log(this.myForm);
  }
}
