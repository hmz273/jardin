import {
  roomDetails,
  aboutDetails,
  Room,
  Service,
  ofSpecial,
  Testi,
  Equipements,
  Facility,
  Siteinfo,
  Gallery,
  Image,
  TradEn,
  TradFr,
  TradAr,
  Contact,
} from "../types";

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
  description:
    "La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat La charmante résidence hôtelière Les Jardins De Zyriab Resort & Spa propose une grande piscine extérieure, un hammam et des massages d'aromathérapie. Elle est située à seulement 15 minutes en voiture de la médina de Marrakech.Les suites confortables comprennent une cuisine entièrement équipée. Une connexion Wi-Fi est disponible gratuitement dans le hall. Chaque suite dispose d'une télévision à écran plat",
};

export const roomsData: Room[] = [
  {
    id: "260555",
    img: "e756191e503067bf8cf6f91e11c0e1fc.jpg",
    title: "Room ",
    surface: 3,
    maxPersons: 2,
  },
  {
    id: "260556",
    img: "e756191e503067bf8cf6f91e11c0e1fc.jpg",
    title: "Room ",
    surface: 3,
    maxPersons: 3,
  },
  {
    id: "260557",
    img: "e756191e503067bf8cf6f91e11c0e1fc.jpg",
    title: "Room ",
    surface: 3,
    maxPersons: 4,
    // other properties
  },
];

export const serviceData: Service[] = [
  {
    id: "260555",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 1 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "260556",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 2 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "260557",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 3 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation",
    offert: "offert",
  },
  {
    id: "260558",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 4 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "260559",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 5 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
  {
    id: "260554",
    img: "170b30ac1f60313ebd728195cf8669e6.jpg",
    title: "Réserver 6 nuits",
    description:
      "Pour toute réservation via notre Site Web uniquement dépassant 5  nuitées, nous avons le plaisir de vous offrir votre transfert arrivée  aéroport  jusqu'à 4 personnes maximum Nous vous remercions de nous le signifier lors de votre réservation.",
    offert: "offert",
  },
];

export const ofSpecialData: ofSpecial[] = [
  {
    id: "1",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "2",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "3",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "4",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "5",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
  {
    id: "6",
    title: "Vacation – 20% Off",
    description:
      "Profitez de 25 % de réduction sur notre tarif Bed and Breakfast lorsque vous séjournez trois nuits supplémentaires",
  },
];

export const comments = [
  { id: "3133543", type: "trip" },
  { id: "3133544", type: "trip" },
  { id: "4704636", type: "booking" },
  { id: "4704637", type: "booking" },
];

// index.ts
interface Comment {
  id: number;
  typeId: number;
  // title: string;
  // text: string;
}

export const commentData: Comment[] = [
  {
    id: 3133543,
    typeId: 1,
  },
  {
    id: 3133544,
    typeId: 1,
  },
  {
    id: 4704636,
    typeId: 2,
  },
  {
    id: 4704637,
    typeId: 2,
  },
  {
    id: 3133545,
    typeId: 3,
  },
  {
    id: 3133546,
    typeId: 3,
  },
];

export const equipementsData: Equipements[] = [
  {
    id: 10955,
    facilities: [
      {
        fcId: 51043,
      },
      {
        fcId: 51044,
      },
      {
        fcId: 51045,
      },
      {
        fcId: 51046,
      },
    ],
  },
  {
    id: 10956,
    facilities: [
      {
        fcId: 51047,
      },
    ],
  },
  {
    id: 10957,
    facilities: [
      {
        fcId: 51048,
      },
      {
        fcId: 51049,
      },
      {
        fcId: 51050,
      },
      {
        fcId: 51051,
      },
      {
        fcId: 51052,
      },
      {
        fcId: 51053,
      },
    ],
  },
  {
    id: 10958,
    facilities: [
      {
        fcId: 51054,
      },
      {
        fcId: 51055,
      },
      {
        fcId: 51056,
      },
      {
        fcId: 51057,
      },
      {
        fcId: 51058,
      },
      {
        fcId: 51059,
      },
      {
        fcId: 51060,
      },
      {
        fcId: 51061,
      },
      {
        fcId: 51062,
      },
    ],
  },
  {
    id: 10959,
    facilities: [
      {
        fcId: 51063,
      },
    ],
  },
  {
    id: 10960,
    facilities: [
      {
        fcId: 51064,
      },
      {
        fcId: 51065,
      },
      {
        fcId: 51066,
      },
    ],
  },
  {
    id: 10961,
    facilities: [
      {
        fcId: 51067,
      },
      {
        fcId: 51068,
      },
    ],
  },
  {
    id: 10962,
    facilities: [
      {
        fcId: 51069,
      },
      {
        fcId: 51070,
      },
      {
        fcId: 51071,
      },
      {
        fcId: 51072,
      },
      {
        fcId: 51073,
      },
    ],
  },
  {
    id: 10963,
    facilities: [
      {
        fcId: 51074,
      },
    ],
  },
  {
    id: 10964,
    facilities: [
      {
        fcId: 51075,
      },
      {
        fcId: 51076,
      },
      {
        fcId: 51077,
      },
      {
        fcId: 51078,
      },
      {
        fcId: 51079,
      },
    ],
  },
  {
    id: 10965,
    facilities: [
      {
        fcId: 51080,
      },
      {
        fcId: 51081,
      },
      {
        fcId: 51082,
      },
    ],
  },
  {
    id: 10966,
    facilities: [
      {
        fcId: 51083,
      },
      {
        fcId: 51084,
      },
      {
        fcId: 51085,
      },
      {
        fcId: 51086,
      },
      {
        fcId: 51087,
      },
      {
        fcId: 51088,
      },
    ],
  },
  {
    id: 10967,
    facilities: [
      {
        fcId: 51089,
      },
      {
        fcId: 51090,
      },
      {
        fcId: 51091,
      },
      {
        fcId: 51092,
      },
      {
        fcId: 51093,
      },
      {
        fcId: 51094,
      },
      {
        fcId: 51095,
      },
      {
        fcId: 51096,
      },
      {
        fcId: 51097,
      },
      {
        fcId: 51098,
      },
      {
        fcId: 51099,
      },
      {
        fcId: 51100,
      },
      {
        fcId: 51101,
      },
      {
        fcId: 51102,
      },
      {
        fcId: 51103,
      },
      {
        fcId: 51104,
      },
      {
        fcId: 51105,
      },
    ],
  },
  {
    id: 10968,
    facilities: [
      {
        fcId: 51106,
      },
      {
        fcId: 51107,
      },
      {
        fcId: 51108,
      },
    ],
  },
  {
    id: 10969,
    facilities: [
      {
        fcId: 51109,
      },
      {
        fcId: 51110,
      },
      {
        fcId: 51111,
      },
      {
        fcId: 51112,
      },
      {
        fcId: 51113,
      },
      {
        fcId: 51114,
      },
      {
        fcId: 51115,
      },
      {
        fcId: 51116,
      },
      {
        fcId: 51117,
      },
      {
        fcId: 51118,
      },
      {
        fcId: 51119,
      },
      {
        fcId: 51120,
      },
      {
        fcId: 51121,
      },
      {
        fcId: 51122,
      },
      {
        fcId: 51123,
      },
      {
        fcId: 51124,
      },
      {
        fcId: 51125,
      },
      {
        fcId: 51126,
      },
      {
        fcId: 51127,
      },
      {
        fcId: 51128,
      },
      {
        fcId: 51129,
      },
      {
        fcId: 51130,
      },
      {
        fcId: 51131,
      },
      {
        fcId: 51132,
      },
      {
        fcId: 51133,
      },
      {
        fcId: 51134,
      },
      {
        fcId: 51135,
      },
      {
        fcId: 51136,
      },
      {
        fcId: 51137,
      },
      {
        fcId: 51138,
      },
      {
        fcId: 51139,
      },
      {
        fcId: 51140,
      },
    ],
  },
];

export const gallery: Gallery[] = [
  {
    images: [
      { image: "5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" },
      { image: "224ddc066cb7e7151f0a8fd78ba4e36f.jpg" },
      { image: "72a226fadb5c37107a9f08c0a3980ba1.jpg" },
      { image: "ca3c263821532e010d5b467fd9d20faf.jpg" },
      { image: "8402edd8935e7d854e08d99cae65020a.jpg" },
      { image: "eb73f6d38ed02f5dc33072d7a5a2e9da.jpg" },
      { image: "450beda4337134caeff55f9c8a9acf27.jpg" },
      { image: "7340706b58e6eb0fe12950bbc04cd240.jpg" },
      { image: "ed88be7a36aea7e8b64e85705b8600d5.jpg" },
      { image: "68d12ff45f6379082079b4798428535f.jpg" },
      { image: "03aba0360cbae61ff572cf249df87fcd.jpg" },
      { image: "e245ae5abcb7a46c516b47d9b7889d5a.jpg" },
      { image: "fd4b384dbe061a15672b95ed6d90095b.jpg" },
      { image: "f28107f5d7ff39e8361ac0caab64b471.jpg" },
      { image: "6624aac33b585d2895d117ef17713bcb.jpg" },
      { image: "54ee6ebd1fa310665e1bafd4f6dd3be5.jpg" },
      { image: "5591dbe022d5558cb05ad5cd89c0f345.jpg" },
      { image: "819785b1e969729e91c9aed81c025877.jpg" },
      { image: "ccb45d6235ab12c8b80a78e1d494f47c.jpg" },
      { image: "617c4cdd9c665f46c46463dfa6c22537.jpg" },
      { image: "9921d504d6f17795a7ada1a03bbf7b00.jpg" },
      { image: "167f60f007f3f170eafc2a183b718cc1.jpg" },
      { image: "4a51c1f8fb552ba40deb2b52b588a239.jpg" },
      { image: "4e63a31f8a81ce6b3f8440a2928e7383.jpg" },
      { image: "2dc098bf3c52d46555a15b86d52e740b.jpg" },
      { image: "78959f293b284a4c897c591ce074037c.jpg" },
      { image: "fbdbbb10e6e782901cab507ed9c4851c.jpg" },
      { image: "214b323f36aa4c6ee10bedb6f4172865.jpg" },
      { image: "19b62dd76cd0f418e5cb87faa8aae458.jpg" },
      { image: "bf4792394129e62e0ca013df6ba34dd0.jpg" },
      { image: "2f2061aa366328d8f91361907e159c95.jpg" },
      { image: "679a41ccc84bb5d1671d9a54c83c96b9.jpg" },
      { image: "c1e7cc43a990efebc22a86613b4b1cbb.jpg" },
      { image: "2e4c74b74392ce839c6ec0ef20d359cf.jpg" },
      { image: "0b37019cc61b883afd2f49fbb4ef96da.jpg" },
      { image: "7646ecd21ae4adc24c722a947f99448f.jpg" },
      { image: "73cd7d360b51dcd8303eb2fc850b7163.jpg" },
      { image: "ba08f5649ee31992cd6e5f7c0d9f6842.jpg" },
      { image: "cf441a549d9ff37ead1d6af777e19a08.jpg" },
      { image: "aa85c7d4c0107b30acdc3379c99a26ed.jpg" },
      { image: "e77c496b01da765574ffc6df5e0d0853.jpg" },
      { image: "7c6add373c3690385f0cbd4fc2e2c1be.jpg" },
      { image: "5c6b95125bf2a7532266f3f83a98b328.jpg" },
      { image: "fd4f58fe66b6f188af836ca20f06f026.jpg" },
      { image: "bdec36d816d738be2ae8a7975b6854b8.jpg" },
      { image: "d3c2b0323384eea47a2f7b47bc0e9ad6.jpg" },
      { image: "c1d917e63561962226be8308955a6f59.jpg" },
      { image: "03bfdcc31804bf9b5870532bc1ad718c.jpg" },
      { image: "5c6fb0f263475e2ea6d415b4d57c677a.jpg" },
      { image: "12245bb5cf382fe4910b1f5806c8e0a2.jpg" },
      { image: "dcb88728fd7bceb4eab01b856f444284.jpg" },
      { image: "996dbc109a4483c7e69d630ce9c1c637.jpg" },
      { image: "0c4bd8aed56cee25828dfe6c42e69c82.jpg" },
      { image: "d97456064a928a1970759541d8423b28.jpg" },
      { image: "819035209b98e7759a4381f23ee237e0.jpg" },
      { image: "7291563182c5dce4a68bc44688d1c79e.jpg" },
      { image: "9dd65c1630e696886d5aac030ece83b3.jpg" },
      { image: "d49e66b8c57c5d40fba3ebd7ff4c86dd.jpg" },
      { image: "8921dbd49119f2aec2fdf6e62c4c34dc.jpg" },
      { image: "7ee04caac248e3dabf5aa0e38b70d788.jpg" },
      { image: "d6004e4dc702a8ff07c46af40ebd2bc0.jpg" },
      { image: "e38b8a2514c2baacc63a3a301dc58faa.jpg" },
      { image: "b374efdfbda5e1c87fb1bbc1608da0bd.jpg" },
      { image: "c501940fd37e9653d9b726a5283ac0ae.jpg" },
      { image: "4a0680aff31519fdcf9aa60856a557cb.jpg" },
      { image: "7f566e0d7edd7cbbc6e0792a750a02c2.jpg" },
      { image: "73692f7cb24b09b428b6f9a6f215cd2b.jpg" },
      { image: "ebba8abd00e402e2abba439c5b69095a.jpg" },
      { image: "7da5c7fcc84f0dbe4bbb7ab847a65620.jpg" },
      { image: "f352abbe66f00ae658ceb3b422270810.jpg" },
      { image: "a2877f61237fb7870e8518e001d7538c.jpg" },
    ],
  },
];

export const contact: Contact = {
  etablissementId: 11242,
};

export const siteinfo: Siteinfo = {
  pTemplate: "jardin",
  etabType: 3,
};

// tradEn.js
export const tradEn: TradEn = {
  title: "Sirayane Boutique Hotel & Spa Marrakech EN",
  description:
    "Located at approximately 15 minutes from Mohamed VI Avenue, the medina, and trendy places in the Red City, Surrounded by 9 golf courses",
  souTitle: "in Marrakech",
  etabTypeLabel: {
    1: "Riad",
    2: "Hotel",
    3: "House",
  },
};

// tradFr.js
export const tradFr: TradFr = {
  title: "Sirayane Boutique Hotel & Spa Marrakech FR",
  description:
    "LSitu&eacute; &agrave; environ 10 minutes de l&rsquo;a&eacute;roport de Marrakech, 15 mn de l&#39;avenue Mohamed VI, de la m&eacute;dina, &nbsp;et endroits branch&eacute;s de la ville ocre, entour&eacute; de 09 terrains de golf et encercl&eacute; par les montagnes enneig&eacute;es de l&#39;Atlas, et par une v&eacute;g&eacute;tation luxuriante,&nbsp; Le Sirayane invite au d&eacute;paysement total et au bien-&ecirc;tre. Boutique H&ocirc;tel &amp; Spa de luxe r&eacute;alis&eacute; par le c&eacute;l&egrave;bre architecte Imaad Rahmouni , Le Sirayane jouit d&#39;un d&eacute;cor exceptionnel",
  souTitle: "a Marrakech",
  etabTypeLabel: {
    1: "Riad",
    2: "Hotel",
    3: "Maison",
  },
};

// tradAr.js
export const tradAr: TradAr = {
  title: "فندق وسبا سيرايان بوتيك مراكش Ar",
  description:
    "على بعد 10 دقائق من مطار مراكش، 15 دقيقة من شارع محمد السادس، المدينة المنورة، وفرع إندرويتس من لا فيل أوكر، محيط. دي 09 تضاريس الجولف والإغلاق؛ من خلال الجبال الممتدة من الأطلس، ومن خلال رحلة",
  souTitle: "في مراكش",
  etabTypeLabel: {
    1: "رياض",
    2: "فندق",
    3: "منزل",
  },
};
