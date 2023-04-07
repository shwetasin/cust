import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator ,FormArray} from "@angular/forms";
import { LocalService } from '../localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  custFrom:FormGroup;
  formSubmitted: boolean = false;
  FormArray:any;
  form: any;

  constructor() {

    this.custFrom = new FormGroup({

      name: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobile: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      interset :new FormArray([
        new FormGroup({
          intersetname: new FormControl(''),
        })
      ])
    });

  }

  OnSubmit(value:any){
    console.log(value)

    

  }

  get interset(): FormArray {
    return this.form.get('interset') as FormArray;
  }

  addInterset() {
    this.interset.push(
      new FormGroup({
        intersetname: new FormControl(''),
      })
    );
  }

removeinterset(){

}
  
}