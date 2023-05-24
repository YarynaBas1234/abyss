import React from 'react';

import './style.scss';

interface RoundIconProps {
	color: 'gray' | 'yellow' | 'green';
	onClick?: (e?: any) => void;
	onMouseDown?: (e?: any) => void;
	icon: JSX.Element;
	className?: string;
}

export const RoundIconButton: React.FC<RoundIconProps> = (props) => {
	const { icon, color, onClick, onMouseDown, className } = props;

	return (
		<button
			onClick={onClick}
			onMouseDown={onMouseDown}
			className={`button-${color} round-button ${className}`}>
			{icon}
		</button>
	);
};
