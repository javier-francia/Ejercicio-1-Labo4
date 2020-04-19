import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private firestore: AngularFirestore) { }


  getArticulos()
  {
    return this.firestore.collection('articulos').snapshotChanges();
  }

  deleteArticulo(id) {
    return this.firestore.collection("articulos").doc(id).delete();
 }

}
