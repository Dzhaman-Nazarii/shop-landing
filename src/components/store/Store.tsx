import { FC } from 'react';
import css from './Store.module.css';
import vouchersImg from '../../images/vouchers.png';
import appStoreImg from '../../images/app-store.png';
import googlePlayImg from '../../images/google-play.png'

export const Store: FC = () => {
  return (
	<section>
		<div className={css.store_container}>
			<div>
				<h3 className={css.store_title}>Download app & <br /> get the voucher!</h3>
				<p className={css.store_description}>Get 30% off for first transaction using <br />
				Rondovision mobile app for now.</p>
				<div className={css.store_apps}>
					<img src={appStoreImg} alt="app-stor" />
					<img src={googlePlayImg} alt="google-play" />
				</div>
			</div>
			<img src={vouchersImg} alt="vouchers" />
		</div>
	</section>
  )
}