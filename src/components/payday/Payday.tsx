import { FC } from "react";
import css from "./Payday.module.css";
import promoImg from "../../images/promo.jpg";

export const Payday: FC = () => {
	return (
		<section className={css.payday}>
			<img
				src={promoImg}
				alt="sale"
			/>
			<div className={css.payday_content}>
				<h2 className={css.payday_title}>Payday <br /> sale now</h2>
				<p className={css.payday_description}>
					Spend minimal $100 get 30% off <br /> voucher code for your next
					purchase
				</p>
				<p className={css.payday_price}>1 June - 10 June 2021</p>
				<p className={css.payday_terms}>*Terms & Conditions apply</p>
				<button className={css.payday_button}>Shop now</button>
			</div>
		</section>
	);
};
