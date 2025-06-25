import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput,
  IonButton, IonItem, IonList, IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonInput, IonButton, IonItem, IonLabel, IonList, IonButtons,
    CommonModule, FormsModule
  ]
})
export class CrudPage {
  name: string = '';
  phone: string = '';
  email: string = '';
  editingId: string | null = null;

  firestore: Firestore = inject(Firestore);
  itemsCollection = collection(this.firestore, 'items');
  items$: Observable<any[]>;

  constructor() {
    this.items$ = collectionData(this.itemsCollection, { idField: 'id' });
  }

  async addItem() {
    if (this.editingId) {
      const itemDoc = doc(this.firestore, `items/${this.editingId}`);
      await updateDoc(itemDoc, {
        name: this.name,
        phone: this.phone,
        email: this.email
      });
      this.editingId = null;
    } else {
      await addDoc(this.itemsCollection, {
        name: this.name,
        phone: this.phone,
        email: this.email
      });
    }

    this.name = '';
    this.phone = '';
    this.email = '';
  }

  editItem(item: any) {
    this.name = item.name;
    this.phone = item.phone;
    this.email = item.email;
    this.editingId = item.id;
  }

  async deleteItem(id: string) {
    const itemDoc = doc(this.firestore, `items/${id}`);
    await deleteDoc(itemDoc);
  }
}