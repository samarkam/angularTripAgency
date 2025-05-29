import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { withDisabledInitialNavigation } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';
import { AuthenticationService } from './authentication.service';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData: any[] = []; // cart from db
  cartSubsciption: Subscription | undefined;
  tripData: Trip[] = [];
  tripSubscription: Subscription | undefined;
  cart: Trip[] = []; // local cart
  uid: string = "";


  constructor(public db: DatabaseConnectionService, private auth: AuthenticationService, afauth: AngularFireAuth) {
    afauth.authState.subscribe((data) => {
        if(data == null) return;
        this.db.getCart(data?.uid).subscribe(cart => {
          this.cartData = cart;
          this.uid = data?.uid;
          console.log(this.cartData);
      });

    }); // nie wiem co tu sie dzieje ???
}


  setBasketData(data: Trip, idx: number) {
    this.cartData[idx] = data;
  }

  getBasketData() {
    return this.cartData;
  }

  addTripToCart(trip: Trip) : void{
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == trip.id) {
            this.cart[i].places++;
            console.log(this.cart[i].places);
            this.db.updateCart(this.uid ,this.cart); // Update the cart in Firebase
            // return i;
        }
    }
    trip.places = 1;
    this.cart.push(trip);

}

removeTripFromCart(idx: number) {
    if(this.cart.filter((trip) => trip.id == idx)) {
        this.cart.filter((trip) => trip.id == idx)[0].places--;
        if(this.cart.filter((trip) => trip.id == idx)[0].places == 0) {
            this.cart = this.cart.filter((trip) => trip.id != idx);
        }
    };
}

}
