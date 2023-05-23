import React from 'react';

import './style.scss';

interface ButtonComponentProps {
	color?: 'blue' | 'white';
	onClick?: () => void;
	name: string | JSX.Element;
	className?: string;
	disabled?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
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
