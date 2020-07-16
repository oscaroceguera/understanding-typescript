import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(), // convert to number parseFloat() or +
      lng: +faker.address.longitude(), // convert to number parseFloat() or +
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
