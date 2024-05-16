export interface roomDetails {
  guests: number;
  surface: number;
  title: string;
  description: string;
  fumer: boolean;
  // equi:
}

export interface aboutDetails {
  title: string;
  souTitle: string;
  description: string;
}

export interface Room {
  id: string;
  img: string;
  title: string;
  surface: number;
  maxPersons: number;
  // add other properties as needed
}

export interface Service {
  id: string;
  img: string;
  title: string;
  description: string;
  offert: string;
  // add other properties as needed
}

export interface Equipements {
  id: number;
  facilities: Facility[];
}

export interface Facility {
  fcId: number;
}

export interface Gallery {
  images: Image[];
}

export interface Image {
  image: string;
}

export interface ofSpecial {
  id: string;
  title: string;
  description: string;
  // add other properties as needed
}

export interface Contact {
  etablissementId: number;
}

export interface Testi {
  id: string;
  title: string;
  description: string;
  rating: number;
  platform: string;
  // add other properties as needed
}

export interface ReseausocialItem {
  ehrsUrl: string;
  rsTitre: string;
}

export interface TradEn {
  title: string;
  description: string;
  souTitle: string;
  etabTypeLabel: { [key: number]: string };

}

export interface TradFr {
  title: string;
  description: string;
  souTitle: string;
  etabTypeLabel: { [key: number]: string };

}

export interface TradAr {
  title: string;
  description: string;
  souTitle: string;
  etabTypeLabel: { [key: number]: string };

}

export interface Siteinfo {
  pTemplate: string;
  etabType: number;
  }
