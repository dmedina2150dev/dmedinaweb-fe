import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../../models/skill';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private ref: any;

  constructor(private firestore: Firestore){

  }

  getSkill(): Observable<Skill[]> {
    this.ref = collection(this.firestore, 'skills');
    return collectionData<Skill>(this.ref);
  }
}
