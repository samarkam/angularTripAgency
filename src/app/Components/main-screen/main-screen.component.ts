import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements AfterViewInit, OnDestroy {
    title = 'My first angular project';
    lat: number = 34.739816; // Updated to Sfax, Tunisia coordinates
    lng: number = 10.761230;

    @ViewChild('carousel', { static: false }) carousel!: ElementRef;

    user$ = this.auth.authState;
    tripImages: { title: string; image: string }[] = [];

    private autoScrollInterval: any;

    constructor(
        public authService: AuthenticationService,
        private auth: AngularFireAuth,
        public db: DatabaseConnectionService
    ) {}

    ngOnInit(): void {
        this.db.getTrips().subscribe({
            next: (trips: any[]) => {
                this.tripImages = trips
                    .filter(trip => trip.image && trip.image[0])
                    .map(trip => ({ title: trip.title || 'Untitled Trip', image: trip.image[0] }));
            },
            error: (err) => {
                console.error('Error fetching trips:', err);
                this.tripImages = []; // Fallback to empty array
            }
        });
    }

    ngAfterViewInit(): void {
        if (this.carousel?.nativeElement) {
            this.startAutoScroll();
        }
    }

    ngOnDestroy(): void {
        this.stopAutoScroll();
    }

    scrollLeft(): void {
        if (this.carousel?.nativeElement) {
            this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    scrollRight(): void {
        if (this.carousel?.nativeElement) {
            this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    startAutoScroll(): void {
        this.stopAutoScroll(); // Clear any existing interval
        this.autoScrollInterval = setInterval(() => {
            if (this.carousel?.nativeElement) {
                const wrapper = this.carousel.nativeElement;
                const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
                if (wrapper.scrollLeft >= maxScroll - 1) {
                    wrapper.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    this.scrollRight();
                }
            }
        }, 5000);
    }

    stopAutoScroll(): void {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }



    trackByFn(index: number, item: { title: string; image: string }): string {
        return item.image; // Unique identifier for each trip
    }
}