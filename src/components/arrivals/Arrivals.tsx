import { FC } from "react";
import css from "./Arrivals.module.css";
import { Card } from "../card/Card";

export const Arrivals: FC = () => {
	return (
		<section className={css.arrivals}>
			<div className={css.arrivals_container}>
				<div className={css.arrivals_header}>
					<h2 className={css.arrivals_title}>New Arrivals</h2>
				</div>
				<div className={css.arrivals_cards}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</section>
	);
};
