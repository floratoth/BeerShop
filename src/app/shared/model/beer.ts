export interface Beer {
  id: number;
  name: string;
  badge: boolean;
  image_url: string;
  beer_style: string;
  contributor: string;
  price: number;
  content: number;
  number_of_malt: number;
  description: string;
  abv: number;
  tagline: string;
  food_pairing: string[];
  brewers_tips: string;
}
