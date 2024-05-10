import { roomDetails, aboutDetails, Room, Service, ofSpecial, Testi, Siteinfo, TradEn, TradFr, TradAr } from "../types";

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
  souTitle: "à Marrakech",
  description: "La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat",
};

export const roomsData: Room[] = [
  {
    id: "1",
    title: "Room ",
    surface: 3,
    maxPersons: 2,
  },
  {
    id: "2",
    title: "Room ",
    surface: 3,
    maxPersons: 3,
  },
  {
    id: "10",
    title: "Room ",
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

export const siteinfo: Siteinfo = {
  pTemplate: "jardin",
  etabType: 3,
  };
 
// tradEn.js
export const tradEn: TradEn = {
  title: "Sirayane Boutique Hotel & Spa Marrakech EN",
  description: "Located at approximately 15 minutes from Mohamed VI Avenue, the medina, and trendy places in the Red City, Surrounded by 9 golf courses",
  souTitle: "in Marrakech",
  etabTypeLabel: {
    1: 'Riad',
    2: 'Hotel',
    3: 'House',
  }
};

// tradFr.js
export const tradFr: TradFr = {
  title: "Sirayane Boutique Hotel & Spa Marrakech FR",
  description: "LSitu&eacute; &agrave; environ 10 minutes de l&rsquo;a&eacute;roport de Marrakech, 15 mn de l&#39;avenue Mohamed VI, de la m&eacute;dina, &nbsp;et endroits branch&eacute;s de la ville ocre, entour&eacute; de 09 terrains de golf et encercl&eacute; par les montagnes enneig&eacute;es de l&#39;Atlas, et par une v&eacute;g&eacute;tation luxuriante,&nbsp; Le Sirayane invite au d&eacute;paysement total et au bien-&ecirc;tre. Boutique H&ocirc;tel &amp; Spa de luxe r&eacute;alis&eacute; par le c&eacute;l&egrave;bre architecte Imaad Rahmouni , Le Sirayane jouit d&#39;un d&eacute;cor exceptionnel",
  souTitle: "a Marrakech",
  etabTypeLabel: {
    1: 'Riad',
    2: 'Hotel',
    3: 'Maison',
  }
};

// tradAr.js
export const tradAr: TradAr = {
  title: "فندق وسبا سيرايان بوتيك مراكش Ar",
  description: "على بعد 10 دقائق من مطار مراكش، 15 دقيقة من شارع محمد السادس، المدينة المنورة، وفرع إندرويتس من لا فيل أوكر، محيط. دي 09 تضاريس الجولف والإغلاق؛ من خلال الجبال الممتدة من الأطلس، ومن خلال رحلة",
  souTitle: "في مراكش",
  etabTypeLabel: {
    1: 'رياض',
    2: 'فندق',
    3: 'منزل',
  }
};
