import { Injectable } from '@angular/core';
import { LOCATIONS } from './location-mock';
import { Location } from './location';

@Injectable()
export class LocationService {

    getLocations(): Promise<Location[]> {
        return  Promise.resolve(LOCATIONS);
    }

    getLocation(id: number): Promise<Location> {
        return this.getLocations().then(locations => locations.find(location => location.id === id));
    } 
} 