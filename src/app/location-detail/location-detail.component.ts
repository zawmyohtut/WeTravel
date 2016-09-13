import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  moduleId: module.id,
  selector: 'wet-location-detail',
  templateUrl: 'location-detail.component.html',
  providers: [ LocationService],
//   styleUrls: ['location-detail-style.css']
})

export class LocationDetailComponent implements OnInit {

    @Input()
    location: Location;

    constructor(private locationService: LocationService, private route: ActivatedRoute ) {
    }

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        // + sign covert string to a number since route parameter are always string
        let id = +params['id'];
        this.locationService.getLocation(id)
          .then(location => this.location = location);
      });
    }

    goBack(): void {
        window.history.back();
    }
}