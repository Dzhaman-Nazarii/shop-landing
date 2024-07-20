import { FC } from "react";
import { Header } from "../header/Header";
import { Promo } from "../promo/Promo";
import css from "./App.module.css";
import { Brands } from "../brands/Brands";
import { Arrivals } from "../arrivals/Arrivals";
import { Payday } from "../payday/Payday";
import { Favourite } from "../favourite/Favourite";
import { Store } from "../store/Store";
import { Mailing } from "../mailing/Mailing";
import { Footer } from "../footer/Footer";

export const App: FC = () => {
	return (
		<section className={css.app}>
			<Header />
			<Promo />
			<Brands />
			<Arrivals
				title={""}
				description={""}
				img={""}
			/>
			<Payday />
			<Favourite
				title={""}
				description={""}
				img={""}
			/>
			<Store />
			<Mailing />
			<Footer />
		</section>
	);
};
