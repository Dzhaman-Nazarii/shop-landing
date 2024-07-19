import { FC } from "react";
import css from "./Brands.module.css";

import hmSvg from "../../icons/hm.svg";
import obeySvg from "../../icons/obey.svg";
import shopifySvg from "../../icons/shopify.svg";
import lacosteSvg from "../../icons/lacoste.svg";
import levisSvg from "../../icons/levis.svg";
import amazonSvg from "../../icons/amazon.svg";

export const Brands: FC = () => {
	return (
		<section className={css.brands}>
			<div className={css.brands_container}>
				<ul className={css.brands_list}>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://www.hm.com/ua/">
							<img src={hmSvg} alt="hm" />
						</a>
					</li>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://obeyclothing.eu/">
							<img src={obeySvg} alt="obey" />
						</a>
					</li>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://www.shopify.com/free-trial/website?term=shopify%20website&adid=699117274556&campaignid=21270911700&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gad_source=1&gclid=CjwKCAjwnei0BhB-EiwAA2xuBuZwv8QicIxv9MSPEn3qbihsax2MXq8X_40EyOqzyy7fUWIt50SSGhoCwQwQAvD_BwE&cmadid=516752332;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494362;cmcreativeid=163722649;cmsiteid=5500011">
							<img src={shopifySvg} alt="shopify" />
						</a>
					</li>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://www.lacoste.ua/?gad_source=1&gclid=CjwKCAjwnei0BhB-EiwAA2xuBmOxaJIBFlTCv1PTYZR0b47ALztLEmeiouz3a_7zFX4FioANvaIjMxoCh84QAvD_BwE">
							<img src={lacosteSvg} alt="lacoste" />
						</a>
					</li>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://www.levi.com/US/en_US/?camp=AFF_DR_Levis_EU_Rakuten___FANSTOSHOP_____3930588_____10&ranMID=53154&ranEAID=jXNTGICLCkU&ranSiteID=jXNTGICLCkU-iHM_nn565sJst4SZLRbTag&gad_source=1&gclid=CjwKCAjwnei0BhB-EiwAA2xuBh2zSdPAn9C4NMIMye5o9lhJu6IGJZApYp8An0e9DrEr6Cf8V_GbZhoC80oQAvD_BwE">
							<img src={levisSvg} alt="levis" />
						</a>
					</li>
					<li className={css.brands_item}>
						<a target="_blank" rel='noreferrer noopener' href="https://www.amazon.com/">
							<img src={amazonSvg} alt="amazon" />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
