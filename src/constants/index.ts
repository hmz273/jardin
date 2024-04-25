import { roomDetails, aboutDetails, Room, Service, ofSpecial, Testi } from "../types";

export const roomDetailsData: roomDetails = {
  guests: 4,
  surface: 12,
  title: "Room Details",
  description: "text",
  fumer: true,
  // equi: ["text", "text", "text", "text", "text"],
};

export const about: aboutDetails = {
  title: "Les Jardins De Zyriab Resort & Spa",
  souTitle: "B&B / Chambre d'hôtes à Marrakech",
  description: "La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat",
};

export const roomsData: Room[] = [
  {
    id: "1",
    title: "Room Details",
    surface: 3,
    maxPersons: 2,
  },
  {
    id: "2",
    title: "Room Details",
    surface: 3,
    maxPersons: 3,
  },
  {
    id: "10",
    title: "Room Details",
    surface: 3,
    maxPersons: 4,
    // other properties
  },
];

export const serviceData: Service[] = [
  {
    id: "1",
    title: "Réserver 1 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "2",
    title: "Réserver 2 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "3",
    title: "Réserver 3 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation",
    offert: "offert",
  },
  {
    id: "4",
    title: "Réserver 4 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "5",
    title: "Réserver 5 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "6",
    title: "Réserver 6 nuits",
    description: "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
];

export const ofSpecialData: ofSpecial[] = [
  {
    id: "1",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "2",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "3",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "4",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "5",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "6",
    title: "Vacation – 20% Off",
    description: "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
];

export const testiData: Testi[] = [
  {
    id: "1",
    title: "Tessatess - Tripadvisor",
    description: "L’emplacement de cet hôtel est très appréciable ! On n’est pas très loin de la place et il y a de nombreux restaurants à côté ! En ce qui concerne la piscine, elle est très propre peut-être un peu petite, nous avons eu de la chance qu’il n’y ai pas grand monde lors de notre",
    rating: 1,
    platform: "tri",
  },
  {
    id: "2",
    title: "Tessatess - Tripadvisor",
    description: "L’emplacement de cet hôtel est très appréciable ! On n’est pas très loin de la place et il y a de nombreux restaurants à côté ! En ce qui concerne la piscine, elle est très propre peut-être un peu petite, nous avons eu de la chance qu’il n’y ai pas grand monde lors de notre",
    rating: 2,
    platform: "booking",
  },
  {
    id: "3",
    title: "Tessatess - Tripadvisor",
    description: "L’emplacement de cet hôtel est très appréciable ! On n’est pas très loin de la place et il y a de nombreux restaurants à côté ! En ce qui concerne la piscine, elle est très propre peut-être un peu petite, nous avons eu de la chance qu’il n’y ai pas grand monde lors de notre",
    rating: 3,
    platform: "cert",
  },
];
