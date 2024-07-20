import { FC } from "react";
import css from "./Arrivals.module.css";
import { Card } from "../card/Card";
import hoodiesImg from '../../images/hoodies.jpg';
import coatsImg from '../../images/coats.jpg';
import teesImg from '../../images/tees.jpg';

interface ICard {
    title: string,
    description: string,
    img: string
}

const arrivalsData: ICard[] = [
    { title: "Hoodies & Sweatshirt", description: "Explore Now!", img: hoodiesImg },
    { title: "New Sneakers", description: "Check them out!", img: coatsImg },
    { title: "Stylish Jackets", description: "Get Yours Today!", img: teesImg }
];

export const Arrivals: FC<ICard> = () => {
	return (
		<section className={css.arrivals}>
			<div className={css.arrivals_container}>
				<div className={css.arrivals_header}>
					<h2 className={css.arrivals_title}>New Arrivals</h2>
				</div>
				<div className={css.arrivals_cards}>
					{arrivalsData.map((card, index) => (
						<Card key={index} title={card.title} description={card.description} img={card.img}/>
					))}
				</div>
			</div>
		</section>
	);
};
