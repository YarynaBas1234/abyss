import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import { ISelectOption } from 'src/interfaces';

import './style.scss';

interface SelectProps {
	options: ISelectOption[];
	selectedOption: ISelectOption;
	handleChange: (selectedOption: ISelectOption) => void;
	className?: string;
}

export const Select: React.FC<SelectProps> = ({
	options,
	selectedOption,
	handleChange,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option: ISelectOption) => {
		handleChange(option);
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && <div className='select-backdrop' onClick={() => setIsOpen(false)}></div>}
			<div className='select-wrapper'>
				<div className={`select ${className}`} onClick={handleDropdownToggle}>
					<div className={`selected-option ${isOpen ? 'open' : ''}`}>
						<span>{options.find((option) => option.value === selectedOption.value)?.label}</span>
					</div>
					<div className={`options ${isOpen ? 'open' : ''}`}>
						{options.map((option) => {
							const isSelectedOption = selectedOption.value === option.value;
							return (
								<div
									key={option.value}
									className={`option ${isSelectedOption ? 'selected' : ''}`}
									onClick={() => handleOptionSelect(option)}>
									<span>{option.label}</span>
									{isSelectedOption && <AiOutlineCheck />}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
