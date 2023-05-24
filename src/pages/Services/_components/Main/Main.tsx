import React from 'react';

import { ISelectOption } from 'src/interfaces';
import { SchemeWrapper } from '../Scheme';

import './style.scss';

interface MainProps {
	horizontalMapCoordinate: number;
	setHorizontalMapCoordinate: (horizontalIndent: number) => void;
	verticalMapCoordinate: number;
	setVerticalMapCoordinate: (verticalMapCoordinate: number) => void;
	zoom: ISelectOption;
	isDefaultPosition: boolean;
	setisDefaultPosition: (isDefaultPosition: boolean) => void;
}

export const Main: React.FC<MainProps> = (props) => {
	const {
		horizontalMapCoordinate,
		setHorizontalMapCoordinate,
		verticalMapCoordinate,
		setVerticalMapCoordinate,
		zoom,
		isDefaultPosition,
		setisDefaultPosition
	} = props;

	return (
		<main className='main-wrapper'>
			<SchemeWrapper
				horizontalMapCoordinate={horizontalMapCoordinate}
				setHorizontalMapCoordinate={setHorizontalMapCoordinate}
				verticalMapCoordinate={verticalMapCoordinate}
				setVerticalMapCoordinate={setVerticalMapCoordinate}
                zoom={zoom}
                isDefaultPosition={isDefaultPosition}
                setisDefaultPosition={setisDefaultPosition}
			/>
		</main>
	);
};
