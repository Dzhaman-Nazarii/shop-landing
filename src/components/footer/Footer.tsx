import { FC } from "react";
import css from "./Footer.module.css";
import facebookSvg from "../..//icons/facebook.svg";
import instagramSvg from "../../icons/instagram.svg";
import twitterSvg from "../../icons/twitter.svg";
import linkedlnSvg from "../../icons/linkedln.svg";

export const Footer: FC = () => {
	return (
		<footer>
			<div className={css.footer_container}>
				<div className={css.footer_social}>
					<h2 className={css.footer_social__title}>Fashion</h2>
					<p className={css.footer_social_description}>
						Complete your style with awesome clothes from us.
					</p>
					<ul className={css.footer_social_list}>
						<li className={css.footer_social_item}>
							<a
								target="_black"
								href="https://www.facebook.com/?locale=uk_UA">
								<img
									src={facebookSvg}
									alt="facebook"
								/>
							</a>
						</li>
						<li className={css.footer_social_item}>
							<a
								target="_black"
								href="https://www.instagram.com/">
								<img
									src={instagramSvg}
									alt="instagram"
								/>
							</a>
						</li>
						<li className={css.footer_social_item}>
							<a
								target="_black"
								href="https://twitter.com/?lang=uk">
								<img
									src={twitterSvg}
									alt="twitter"
								/>
							</a>
						</li>
						<li className={css.footer_social_item}>
							<a
								target="_black"
								href="https://ua.linkedin.com/">
								<img
									src={linkedlnSvg}
									alt="linkedln"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className={css.footer_info}>
					<ul className={css.footer_info__list}>
						<li className={css.footer_info__title}>Company</li>
						<li className={css.footer_info__item}>About</li>
						<li className={css.footer_info__item}>Contact us</li>
						<li className={css.footer_info__item}>Support</li>
						<li className={css.footer_info__item}>Careers</li>
					</ul>
					<ul className={css.footer_info__list}>
						<li className={css.footer_info__title}>Quick Link</li>
						<li className={css.footer_info__item}>Share Location</li>
						<li className={css.footer_info__item}>Orders Tracking</li>
						<li className={css.footer_info__item}>Size Guide</li>
						<li className={css.footer_info__item}>FAQs</li>
					</ul>
					<ul className={css.footer_info__list}>
						<li className={css.footer_info__title}>Legal</li>
						<li className={css.footer_info__item}>Terms & conditions</li>
						<li className={css.footer_info__item}>Privacy Policy</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
