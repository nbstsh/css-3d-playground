import React from 'react';
import containerStyle from './Container.module.scss';
import ScreenBox from '../components/ScreenBox';

const ScreenBoxContainer = () => {
	return (
		<div className={containerStyle.container}>
			<h2 className={containerStyle.title}>Screen rotation sample</h2>
			<ScreenBox />
		</div>
	);
};

export default ScreenBoxContainer;
