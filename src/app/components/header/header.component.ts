import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import Form from '../../models/form.model';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form: Form = new Form();
  submitted = false;
 
  datenow: any;
  todayDate : Date = new Date();

  constructor(private firebase: FirebaseService) { }
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem, 'ani');
  }
  options: AnimationOptions = {
    path: 'assets/img/success.json',
    loop: false,
    autoplay: true,
  };

  optionss: AnimationOptions = {
    path: 'assets/img/contact.json',
    loop: true,
    autoplay: true,
  };

  styles: Partial<CSSStyleDeclaration> = {
    width: '100%',
    margin: '0 auto',
  };

  styless: Partial<CSSStyleDeclaration> = {
    maxWidth: '70px',
    margin: '0 auto',
    maxHeight: '70px',
    cursor:'pointer'
  };
 
 

  ngOnInit(): void {
    this.datenow = new Date();;
  }


  saveTutorial(form: any): void {
    console.log(form.value);
    console.log(form.value.date)
    if (form.status == 'VALID') {
      this.firebase.create(this.form).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;  });
    } else {
      console.log("error")
    }


  }
  newTutorial(): void {
    this.submitted = false;
    this.form = new Form();
  }

}

