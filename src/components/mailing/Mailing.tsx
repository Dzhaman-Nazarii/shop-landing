import { FC } from 'react';
import css from './Mailing.module.css'

export const Mailing: FC = () => {
  return (
	<section>
		<div className={css.mailing_container}>
			<h2 className={css.mailing_title}>Join shopping community to get monthly promo</h2>
			<p className={css.mailing_description}>Type your email down below and be young wild generation</p>
			<div className={css.mailing_form}>
				<input className={css.mailing_input} type="text" placeholder='Add your email here' />
				<button className={css.mailing_button}>Send</button>
			</div>
		</div>
	</section>
  )
}