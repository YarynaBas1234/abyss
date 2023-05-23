import React from 'react';

import './style.scss';

interface RoundIconProps {
	color: 'gray' | 'yellow' | 'green';
	onClick?: () => void;
	icon: JSX.Element;
}

export const RoundIconButton: React.FC<RoundIconProps> = (props) => {
	const { icon, color, onClick } = props;

	return <button onClick={onClick} className={`button-${color} round-button` }>{icon}</button>;
};
