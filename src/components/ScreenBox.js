import React, { useState } from 'react';
import style from './ScreenBox.module.scss';

const DummyScreen = ({ title }) => (
	<section className={style.dummy}>
		<h1>{title}</h1>
		<p>
			Ipsum tempor nisi mollit laboris deserunt id cupidatat ea occaecat.
			Ipsum et excepteur anim esse Lorem officia in aute esse nostrud amet
			nostrud consequat in. Sunt sunt commodo eu irure id proident Lorem
			anim ad non dolor ex. Irure pariatur aliquip amet sunt veniam ex
			ipsum aliquip sunt eiusmod ut in duis.
		</p>
	</section>
);

const ScreenBox = () => {
	const [needAnimation, setNeedAnimation] = useState(false);

	return (
		<div className={`${style.cube} ${needAnimation ? style.animate : ''}`}>
			<div className={style.face}>
				<DummyScreen title='Screen 1' />
				<button
					className={style.button}
					onClick={() => setNeedAnimation(true)}
				>
					animate
				</button>
			</div>
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face}>
				<DummyScreen title='Screen 2' />
			</div>
		</div>
	);
};

export default ScreenBox;
