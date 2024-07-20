import { FC } from "react";
import css from "./Card.module.css";
import arrowImg from '../../icons/arrow.svg'

interface ICardProps {
	title: string;
	description: string;
	img: string;
}

export const Card: FC<ICardProps> = ({title, description, img}) => {
	return (
		<div className={css.card}>
			<img
				className={css.card_image}
				src={img}
				alt={title}
			/>
			<div className={css.card_body}>
				<div className={css.card_text}>
					<h3 className={css.card_title}>{title}</h3>
					<p className={css.card_description}>{description}</p>
				</div>
				<div className={css.card_icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
			</div>
		</div>
	);
};
