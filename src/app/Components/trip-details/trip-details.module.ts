import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';

@NgModule({
  declarations: [TripDetailsComponent],
  imports: [CommonModule],
  exports: [TripDetailsComponent]  // 👈 This makes it usable in other modules
})
export class TripDetailsModule {}
