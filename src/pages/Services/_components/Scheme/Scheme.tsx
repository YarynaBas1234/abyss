import React from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './style.scss';
import { RoundIconButton } from 'src/_components';

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

// interface SchemeProps {
// 	isDefaultPosition
// }

// const Scheme: React.FC<SchemeProps> = (props) => {
// 	const { 
// 		isDefaultPosition,
		
// 	 } = props;

// 	return (
// 		<div
// 			className={isDefaultPosition ? 'scheme default-category-position' : 'scheme'}
// 			style={
// 				!isDefaultPosition
// 					? {
// 							left: posX,
// 							top: posY,
// 							transform: `scale(${zoom / 100})`,
// 					  }
// 					: { transform: `scale(${zoom / 100})` }
// 			}
// 			onMouseDown={handleMouseDown}
// 			onMouseUp={handleMouseUp}>
// 			<div className='main-category-wrapper'>
// 				<div className='category-name'>Categories</div>
// 				<RoundIconButton icon={<AiFillPlusCircle className='menu-circle-icon' />} color='gray' />
// 			</div>
// 		</div>
// 	);
// };

interface SchemeWrapperProps {
	horizontalMapCoordinate: number;
	setHorizontalMapCoordinate: (horizontalMapCoordinate: number) => void;
	verticalMapCoordinate: number;
	setVerticalMapCoordinate: (verticalMapCoordinate: number) => void;
	zoom: number;
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

	const stepIndent = 5;

	const handleMouseDown = (event: any) => {
		setDragging(true);
		const rect = event.target.getBoundingClientRect();
		const x = event.clientX - rect.left; //x position within the element.
		const y = event.clientY - rect.top;

		setCurrentX(x);
		setCurrentY(y);
	};

	const handleMouseMove = (event: any) => {
		const x = event.clientX - currentX;
		const y = event.clientY - 161 - currentY;

		if (dragging) {
			setPosX(x);
			setPosY(y);
			setisDefaultPosition(false);
		}
	};

	const handleMouseUp = () => {
		setDragging(false);
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
					{/* <Scheme 
					isDefaultPosition={isDefaultPosition}
					/> */}
				<div
					className={isDefaultPosition ? 'scheme default-category-position' : 'scheme'}
					style={
						!isDefaultPosition
							? {
									left: posX,
									top: posY,
									transform: `scale(${zoom / 100})`,
							  }
							: { transform: `scale(${zoom / 100})` }
					}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}>
					<div className='main-category-wrapper'>
						<div className='category-name'>Categories</div>
						<RoundIconButton
							icon={<AiFillPlusCircle className='menu-circle-icon' />}
							color='gray'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
