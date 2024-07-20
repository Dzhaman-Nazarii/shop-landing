import { FC } from "react";
import css from "./Card.module.css";
import hoodiesImg from "../../images/hoodies.jpg";
import arrowImg from '../../icons/arrow.svg'

export const Card: FC = () => {
	return (
		<div className={css.card}>
			<img
				className={css.card_image}
				src={hoodiesImg}
				alt="hoodies"
			/>
			<div className={css.card_body}>
				<div className={css.card_text}>
					<h3 className={css.card_title}>Hoodies & Sweetshirt</h3>
					<p className={css.card_description}>Explore Now!</p>
				</div>
				<div className={css.card_icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
			</div>
		</div>
	);
};
