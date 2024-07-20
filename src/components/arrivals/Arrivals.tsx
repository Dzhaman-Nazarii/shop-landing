import { FC } from "react";
import css from "./Arrivals.module.css";
import { Card } from "../card/Card";

interface ICard {
    title: string,
    description: string,
    img: string
}

const arrivalsData: ICard[] = [
    { title: "Hoodies & Sweatshirt", description: "Explore Now!", img: "path/to/image1.jpg" },
    { title: "New Sneakers", description: "Check them out!", img: "path/to/image2.jpg" },
    { title: "Stylish Jackets", description: "Get Yours Today!", img: "path/to/image3.jpg" }
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
						<Card key={index} title={card.title} description={card.description}/>
					))}
				</div>
			</div>
		</section>
	);
};
