import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Trip } from 'src/app/Interfaces/ITrip';
import { CartDataService } from 'src/app/Services/cart-data.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent implements OnInit {

  @Input('trip') trip: Trip | undefined;
  @Input('places') places: number = 0;
  counter: number = 0;
  minusButton: any;
  plusButton: any;
  cart: Trip[] = [];
  uid: string = "";

  constructor(
    private data: CartDataService,
    afauth: AngularFireAuth,
    public db: DatabaseConnectionService
  ) {

    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.db.getCart(data?.uid).subscribe((cart) => {
        this.cart = cart;
        this.uid = data?.uid;
      });
    });
  }
  ngOnInit(): void {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
  }

  getAvgReview(): number {
  if (!this.trip || !this.trip.reviews || this.trip.reviews.length === 0) {
    return 0;
  }

const total = this.trip.reviews.reduce((acc, review) => acc + review.points, 0);
  return total / this.trip.reviews.length;
}


  addPlace(id: number) {
    const targetTrip = this.cart.find((trip) => trip.id == id);
        if (targetTrip && targetTrip.places < this.trip!.places) {
          targetTrip.places++;
          this.db.updateCart(this.uid, this.cart);
        }
    
  }

  removePlace(id: number) {
    if(this.cart.find((trip) => trip.id == id)!.places > 1) {
      this.cart.find((trip) => trip.id == id)!.places--;
      this.db.updateCart(this.uid, this.cart);
    }
    else {
      this.db.updateCart(this.uid, this.cart.filter((trip) => trip.id !== id));
    }
  }
}
