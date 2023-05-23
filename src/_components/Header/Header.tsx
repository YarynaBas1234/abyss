import React from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { ButtonComponent } from 'src/_components';
import { zoom_sizes } from 'src/constants';

import './style.scss';

interface HeaderProps {
	setHorizontalMapCoordinate: (horizontalMapCoordinate: number) => void;
	setVerticalMapCoordinate: (verticalMapCoordinate: number) => void;
	setZoom: (zoom: number) => void;
	zoom: number;
	setisDefaultPosition: (isDefaultPosition: boolean) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
	const {
		setHorizontalMapCoordinate,
		setVerticalMapCoordinate,
		setZoom,
		zoom,
		setisDefaultPosition,
	} = props;

	const handleZoomIn = () => {
		const zoomIndex = zoom_sizes.indexOf(zoom);
		setZoom(zoom_sizes[zoomIndex - 1]);
	};

	const handleZoomOut = () => {
		const zoomIndex = zoom_sizes.indexOf(zoom);
		setZoom(zoom_sizes[zoomIndex + 1]);
	};

	return (
		<header className='header-wrapper'>
			<h1>
				Services
				<span className='services-counter'>0</span>
			</h1>
			<div className='control-buttons'>
				<ButtonComponent
					name='LIST VIEW'
					className='control-button-item'
					color='blue'
					onClick={() => {}}
				/>
				<ButtonComponent
					name={<BsFillCursorFill />}
					className='control-button-item'
					color='white'
					onClick={() => {
						setHorizontalMapCoordinate(0);
						setVerticalMapCoordinate(0);
						setisDefaultPosition(true);
					}}
				/>
				<div className='zoom-menu'>
					<ButtonComponent
						name={<AiOutlineMinus />}
						className='zoom-menu-item'
						color='white'
						disabled={zoom_sizes.indexOf(zoom) < 1}
						onClick={handleZoomIn}
					/>
					<span className='scale zoom-menu-item'>{zoom}%</span>
					<ButtonComponent
						name={<AiOutlinePlus />}
						className='zoom-menu-item'
						color='white'
						disabled={zoom_sizes.indexOf(zoom) === zoom_sizes.length - 1}
						onClick={handleZoomOut}
					/>
				</div>
			</div>
		</header>
	);
};
