import React from 'react';

import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { categories } from 'src/store';
import { ISelectOption } from 'src/interfaces';
import { CategoriesTree } from '../CategoriesTree';

import './style.scss';

interface NavigationButtonProps {
	arrowIcon: JSX.Element;
	className?: string;
	arrowDirection: 'up' | 'down' | 'left' | 'right';
	onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
	const { arrowIcon, className, arrowDirection, onClick } = props;

	return (
		<button
			onClick={onClick}
			className={
				arrowDirection === 'up' || arrowDirection === 'down'
					? `navigation-button navigation-button-UpDown ${className}`
					: `navigation-button navigation-button-LeftRight ${className}`
			}>
			{arrowIcon}
		</button>
	);
};

interface SchemeWrapperProps {
	horizontalMapCoordinate: number;
	setHorizontalMapCoordinate: (horizontalMapCoordinate: number) => void;
	verticalMapCoordinate: number;
	setVerticalMapCoordinate: (verticalMapCoordinate: number) => void;
	zoom: ISelectOption;
	isDefaultPosition: boolean;
	setisDefaultPosition: (isDefaultPosition: boolean) => void;
}

export const SchemeWrapper: React.FC<SchemeWrapperProps> = (props) => {
	const {
		horizontalMapCoordinate,
		setHorizontalMapCoordinate,
		verticalMapCoordinate,
		setVerticalMapCoordinate,
		zoom,
		isDefaultPosition,
		setisDefaultPosition,
	} = props;

	const [posX, setPosX] = React.useState<number>(0);
	const [posY, setPosY] = React.useState<number>(0);
	const [currentX, setCurrentX] = React.useState(0);
	const [currentY, setCurrentY] = React.useState(0);
	const [dragging, setDragging] = React.useState(false);
	const [isActiveAction, setIsActiveAction] = React.useState(false);

	const stepIndent = 5;

	const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
		setDragging(true);
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		setCurrentX(x);
		setCurrentY(y);
	};

	const handleMouseMove = (event: any) => {
		if (dragging && !isActiveAction) {
			const x = event.clientX - currentX;
			const y = event.clientY - 161 - currentY;

			setPosX(x);
			setPosY(y);
			setisDefaultPosition(false);
		}
	};

	const handleMouseUp = () => {
		setIsActiveAction(false);
		setDragging(false);
	};

	const onActionStart = () => {
		setIsActiveAction(true);
	};

	return (
		<div
			className='scheme-wrapper'
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseUp}>
			<div className='navigation-zoom-area'>
				<NavigationButton
					arrowIcon={<IoIosArrowUp className='arrow-icon' />}
					className='top-button-position'
					arrowDirection='up'
					onClick={() => {
						setVerticalMapCoordinate(verticalMapCoordinate + stepIndent);
					}}
				/>
				<NavigationButton
					arrowIcon={<IoIosArrowDown className='arrow-icon' />}
					className='bottom-button-position'
					arrowDirection='down'
					onClick={() => {
						setVerticalMapCoordinate(verticalMapCoordinate - stepIndent);
					}}
				/>
				<NavigationButton
					arrowIcon={<IoIosArrowBack className='arrow-icon' />}
					className='left-button-position'
					arrowDirection='left'
					onClick={() => {
						setHorizontalMapCoordinate(horizontalMapCoordinate + stepIndent);
					}}
				/>
				<NavigationButton
					arrowIcon={<IoIosArrowForward className='arrow-icon' />}
					className='right-button-position'
					arrowDirection='right'
					onClick={() => {
						setHorizontalMapCoordinate(horizontalMapCoordinate - stepIndent);
					}}
				/>
			</div>
			<div
				className='zoom-area'
				style={{ left: horizontalMapCoordinate, top: verticalMapCoordinate }}>
				<div
					className={isDefaultPosition ? 'scheme default-category-position' : 'scheme'}
					style={
						!isDefaultPosition
							? {
									left: posX,
									top: posY,
									transform: `scale(${zoom.value / 100})`,
							  }
							: { transform: `scale(${zoom.value / 100})` }
					}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}>
					<CategoriesTree categories={categories} onActionStart={onActionStart} />
				</div>
			</div>
		</div>
	);
};
