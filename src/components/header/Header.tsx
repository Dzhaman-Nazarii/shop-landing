import { FC } from "react";
import css from "./Header.module.css";
import logo from "../../icons/logo.svg";

export const Header: FC = () => {
	return (
		<header className={css.header}>
			<div className={css.header_container}>
				<div className={css.header_row}>
					<div className={css.header_logo}>
						<img
							src={logo}
							alt="logo fashion"
						/>
						<span>Fashion</span>
					</div>
					<nav>
						<ul className={css.header_list}>
							<li>
								<a
									className={css.header_link}
									href="!#">
									Catalogue
								</a>
							</li>
							<li>
								<a
									className={css.header_link}
									href="/">
									Fashion
								</a>
							</li>
							<li>
								<a
									className={css.header_link}
									href="/">
									Favourite
								</a>
							</li>
							<li>
								<a
									className={css.header_link}
									href="/">
									Lifestyle
								</a>
							</li>
							<li>
								<a
									className={css.header_sign}
									href="/">
									Sign up
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
