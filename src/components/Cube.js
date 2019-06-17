import React from 'react';
import style from './Cube.module.scss';

const Cube = () => {
	return (
		<div className={style.cube}>
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
			<div className={style.face} />
		</div>
	);
};

export default Cube;
