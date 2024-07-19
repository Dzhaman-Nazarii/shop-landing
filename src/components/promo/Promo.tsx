import { FC } from "react";
import css from "./Promo.module.css";
import incendiaryImg from "../../images/incendiary.jpg";
import decorSvg from "../../icons/decor.svg";

export const Promo: FC = () => {
	return (
		<section className={css.promo}>
			<div>
				<div className={css.promo_content}>
					<div>
						<p className={css.promo_title}>
							Let’s explore unique clothes.
						</p>
						<p className={css.promo_description}>
							Live for Influential and Innovative fashion!
						</p>
						<div className={css.promo_united}>
							<img
              className={css.promo_decor}
								src={decorSvg}
								alt="decor"
							/>
							<button className={css.promo_button}>
								Shop Now
							</button>
						</div>
					</div>
						<img
							src={incendiaryImg}
							alt="promo"
						/>
				</div>
			</div>
		</section>
	);
};
