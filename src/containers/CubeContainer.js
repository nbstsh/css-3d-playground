import React from 'react';
import containerStyle from './Container.module.scss';
import style from './CubeContainer.module.scss';
import Cube from '../components/Cube';

const CubeContainer = () => {
	return (
		<div className={`${containerStyle.container} ${style.container}`}>
			<h2 className={containerStyle.title}>Cube Sample</h2>
			<Cube />
			<Cube />
			<Cube />
			<Cube />
			<Cube />
		</div>
	);
};

export default CubeContainer;
