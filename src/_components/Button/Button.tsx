import React from 'react';

import './style.scss';

interface ButtonProps {
	color?: 'blue' | 'white';
	onClick?: () => void;
	name: string | JSX.Element;
	className?: string;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { color, onClick, name, className, disabled } = props;

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={color ? `${color}-button button ${className}` : `button ${className}`}>
			{name}
		</button>
	);
};
