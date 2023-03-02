import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Form from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/enquiry';
   formRef: AngularFirestoreCollection<Form>;

  constructor(private db: AngularFirestore) { 
    this.formRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Form> {
    return this.formRef;
  }
  create(form: Form): any {
    return this.formRef.add({ ...form });
  }
  update(id: string, data: any): Promise<void> {
    return this.formRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.formRef.doc(id).delete();
  }
}
