import React from 'react';
import style from './CubeContainer.module.scss';
import Cube from '../components/Cube';

const CubeContainer = () => {
	return (
		<div className={style.container}>
			<h2 className={style.title}>Cube Sample</h2>
			<Cube />
			<Cube />
			<Cube />
			<Cube />
			<Cube />
		</div>
	);
};

export default CubeContainer;
