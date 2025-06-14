import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripsComponent } from './Components/trips/trips.component';
import { TripComponent } from './Components/trip/trip.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingCartCardComponent } from './Components/shopping-cart-card/shopping-cart-card.component';
import { AddModalComponent } from './Components/add-modal/add-modal.component';
import { RemoveTripComponent } from './Components/remove-trip/remove-trip.component';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginButtonComponent } from './Components/login-button/login-button.component';
import { SignupButtonComponent } from './Components/signup-button/signup-button.component';
import { NavigationBarLoginComponent } from './Components/navigation-bar-login/navigation-bar-login.component';
import { HistoryComponent } from './Components/history/history.component';
import { HistoryCardComponent } from './Components/history-card/history-card.component';
import { TripDetailsComponent } from './Components/trip-details/trip-details.component';
import { Trip2Component } from './Components/trip2/trip2.component';
import { CommentComponent } from './Components/comment/comment.component';
import { CommentFormComponent } from './Components/comment-form/comment-form.component';
import { OverallReviewComponent } from './Components/overall-review/overall-review.component';
import { PlaceholderTripCardComponent } from './Components/placeholder-trip-card/placeholder-trip-card.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { LoginRegisterButtonsComponent } from './Components/login-register-buttons/login-register-buttons.component';
import { LogOutButtonComponent } from './Components/log-out-button/log-out-button.component';
import { LoginViewComponent } from './Components/login-view/login-view.component';
import { RegisterViewComponent } from './Components/register-view/register-view.component';
import { CartComponent } from './Components/cart/cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ManageTripsComponent } from './Components/manage-trips/manage-trips.component';
import { EditModalComponent } from './Components/edit-modal/edit-modal.component';
import { AppMetricCardComponent } from './Components/app-metric-card/app-metric-card.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripComponent,
    NavigationBarComponent,
    ShoppingCartComponent,
    ShoppingCartCardComponent,
    AddModalComponent,
    RemoveTripComponent,
    MainScreenComponent,
    NotificationsComponent,
    MenuComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    NavigationBarLoginComponent,
    HistoryComponent,
    HistoryCardComponent,
    TripDetailsComponent,
    Trip2Component,
    CommentComponent,
    CommentFormComponent,
    OverallReviewComponent,
    PlaceholderTripCardComponent,
    LoginRegisterButtonsComponent,
    LogOutButtonComponent,
    LoginViewComponent,
    RegisterViewComponent,
    CartComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    ManageTripsComponent,
    EditModalComponent,
    DashboardComponent,
    AppMetricCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}


