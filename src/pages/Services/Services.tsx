import React from 'react';
import { Header } from 'src/_components';
import { Main } from './_components';
import { zoom_sizes } from 'src/constants';

import '../../scss/index.scss';

export const Services = () => {
	const [horizontalMapCoordinate, setHorizontalMapCoordinate] = React.useState<number>(0);
	const [verticalMapCoordinate, setVerticalMapCoordinate] = React.useState<number>(0);
    const [isDefaultPosition, setisDefaultPosition] = React.useState(true);
	const [zoom, setZoom] = React.useState<number>(zoom_sizes.find((size) => size === 100) || zoom_sizes[0]);


	return (
		<div className='wrapper'>
			<Header
				setHorizontalMapCoordinate={setHorizontalMapCoordinate}
				setVerticalMapCoordinate={setVerticalMapCoordinate}
				setZoom={setZoom}
                zoom={zoom}
                setisDefaultPosition={setisDefaultPosition}
			/>
			<Main
				horizontalMapCoordinate={horizontalMapCoordinate}
				setHorizontalMapCoordinate={setHorizontalMapCoordinate}
				verticalMapCoordinate={verticalMapCoordinate}
				setVerticalMapCoordinate={setVerticalMapCoordinate}
                zoom={zoom}
                isDefaultPosition={isDefaultPosition}
                setisDefaultPosition={setisDefaultPosition}
			/>
		</div>
	);
};
