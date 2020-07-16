import { User } from './User';
import { Company } from './Company';

// Instructions to every other class n how ther can be to 'addMarker'
export interface Mappable {
  position: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(idvId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(idvId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.position.lat,
        lng: mappable.position.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.infoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
