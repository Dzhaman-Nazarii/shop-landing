import { FC } from "react";
import css from "./Arrivals.module.css";
import { Card } from "../card/Card";
import { arrivalsData, ICard } from "../../types";

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
