import { Component, OnInit  } from '@angular/core';
import Form from 'src/app/models/form.model';
import { map } from 'rxjs/operators';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  forms?: Form[];
  currentTutorial?: Form;
  currentIndex = -1;
  name = '';
  message: any;
  rows: any;
  ColumnMode = ColumnMode;
  reorderable = true;
 

  constructor( 
    private fbs: FirebaseService,
    // private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.fbs.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.rows = data;
      console.log(data , "Hello")
    });
  }
  setActiveTutorial(form: Form, index: number): void {
    this.currentTutorial = form;
    this.currentIndex = index;
  }

  

}
