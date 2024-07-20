import { FC } from "react";
import css from "./Fauvorite.module.css";
import { Card } from "../card/Card";
import { favouriteData, ICard } from "../../types";

export const Favourite: FC<ICard> = () => {
	return (
		<section className={css.favourite}>
			<div className={css.favourite_container}>
				<div className={css.favourite_header}>
					<h2 className={css.favourite_title}>Young’s Favourite</h2>
				</div>
				<div className={css.favourite_cards}>
					{favouriteData.map((card, index) => (
						<Card key={index} title={card.title} description={card.description} img={card.img}/>
					))}
				</div>
			</div>
		</section>
	);
};
