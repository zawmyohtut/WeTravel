import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';
import { Router } from '@angular/router'; 

@Component({
    moduleId: module.id,
    selector: 'wet-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home-style.css'],
    providers: [ LocationService ]
})

export class HomeComponent implements OnInit {
    
    locations: Location[]; 

    constructor(private locationService: LocationService, private router: Router) {
    }   

    ngOnInit(): void {
        this.getLocations();
    }

    getLocations(): void {
        this.locationService.getLocations().then(locations => this.locations = locations);
    }

    goToDetail(location: Location): void {
        let link = ['/location-detail', location.id];
        this.router.navigate(link);
    }

    goBack(): void {
        window.history.back();
    }

}