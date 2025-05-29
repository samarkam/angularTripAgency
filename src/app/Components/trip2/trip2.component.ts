import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../Interfaces/ITrip';
import { CartDataService } from '../../Services/cart-data.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-trip2',
  templateUrl: './trip2.component.html',
  styleUrls: ['./trip2.component.css'],
})
export class Trip2Component implements OnInit {
  @Input('trip') trip?: Trip;
  cart: Trip[] = [];
  counter: number = 0;
  uid: string = '';
  mean: number = 0;

  constructor(
    private serviceData: CartDataService,
    public auth: AuthenticationService,
    afauth: AngularFireAuth,
    public db: DatabaseConnectionService
  ) {
    afauth.authState.subscribe((data) => {
      if (!data?.uid) return;

      this.uid = data.uid;

      this.db.getCart(this.uid).subscribe((cart) => {
        this.cart = cart || [];

        if (this.trip) {
          const tripInCart = this.cart.find((t) => t.id === this.trip!.id);
          this.counter = tripInCart ? tripInCart.places : 0;
        }
      });
    });
  }

  ngOnInit(): void {
  const reviews = this.trip?.reviews ?? [];
  if (reviews.length > 0) {
    const totalPoints = reviews.reduce((acc, review) => acc + review.points, 0);
    this.mean = totalPoints / reviews.length;
  } else {
    this.mean = 0;
  }
}

  addPlace(id: number): void {
    if (!this.trip) return;

    const existingTrip = this.cart.find((t) => t.id === id);

    if (existingTrip) {
      if (existingTrip.places < this.trip.places) {
        existingTrip.places++;
        this.db.updateCart(this.uid, this.cart);
      }
    } else {
      this.cart.push({ ...this.trip, places: 1 });
      this.db.updateCart(this.uid, this.cart);
    }
  }

  removePlace(id: number): void {
    const existingTrip = this.cart.find((t) => t.id === id);

    if (!existingTrip) return;

    if (existingTrip.places > 1) {
      existingTrip.places--;
    } else {
      this.cart = this.cart.filter((t) => t.id !== id);
    }

    this.db.updateCart(this.uid, this.cart);
  }
}
