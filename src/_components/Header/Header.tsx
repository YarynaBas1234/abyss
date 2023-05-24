import React from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Button, Select } from 'src/_components';
import { zoom_sizes } from 'src/constants';
import { ISelectOption } from 'src/interfaces';

import './style.scss';

interface HeaderProps {
	setHorizontalMapCoordinate: (horizontalMapCoordinate: number) => void;
	setVerticalMapCoordinate: (verticalMapCoordinate: number) => void;
	setZoom: (zoom: ISelectOption) => void;
	zoom: ISelectOption;
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
				<Button name='LIST VIEW' className='control-button-item' color='blue' onClick={() => {}} />
				<Button
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
					<Button
						name={<AiOutlineMinus />}
						className='zoom-menu-item'
						color='white'
						disabled={zoom_sizes.indexOf(zoom) < 1}
						onClick={handleZoomIn}
					/>
					<Select
						className='zoom-menu-item'
						options={zoom_sizes}
						selectedOption={zoom}
						handleChange={setZoom}
					/>
					<Button
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
