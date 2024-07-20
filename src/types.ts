
import trendingImg from './images/trending.jpg';
import allUnderImg from './images/all-under.jpg'
import hoodiesImg from './images/hoodies.jpg';
import coatsImg from './images/coats.jpg';
import teesImg from './images/tees.jpg';

export interface ICardProps {
	title: string;
	description: string;
	img: string;
}

export interface ICard {
    title: string,
    description: string,
    img: string
}

export const arrivalsData: ICard[] = [
    { title: "Hoodies & Sweatshirt", description: "Explore Now!", img: hoodiesImg },
    { title: "New Sneakers", description: "Check them out!", img: coatsImg },
    { title: "Stylish Jackets", description: "Get Yours Today!", img: teesImg }
];

export const favouriteData: ICard[] = [
    { title: "Trending on instagram", description: "Explore Now!", img: trendingImg },
    { title: "All Under $40", description: "Explore Now!", img: allUnderImg }
];