import React from 'react';

// import './style.scss';
// import { zoom_sizes } from 'src/constants';

interface SelectProps {
    options: number[],
	selectedOption: number,
	onOptionSelect: () => void,
	placeholder?: string
	className?: string,
	label: string,
	required?: boolean,
	isSubmitted: boolean,
}

export const Select: React.FC<SelectProps> = (props) => {
    // const { 
    //     options,
    //     selectedOption,
    //     onOptionSelect,
    //     placeholder,
    //     className,
    //     label,
    //     required,
    //     isSubmitted,
    // } = props;
	// const [isOpen, setIsOpen] = useState(false);

	// const handleDropdownToggle = () => {
	// 	setIsOpen(!isOpen);
	// };

	// const handleOptionSelect = (option: any) => {
	// 	setIsOpen(false);
	// };

	return (
		<>
			{/* {isOpen && <div className='select-backdrop' onClick={() => setIsOpen(false)}></div>} */}
			<div>
				{/* {label && <span>{label}</span>}
				<div onClick={handleDropdownToggle}>
					<div
						className={`selected-option ${isOpen ? 'open' : ''} ${
							!selectedOption ? 'selected-option-placeholder' : ''
						}`}>
						<span>
							{selectedOption
								? zoom_sizes.find((option) => option === selectedOption)
								: placeholder}
						</span>
						<span className='select-arrow'></span>
					</div>
					<div>
						{options.map((option) => (
							<div key={option} onClick={() => handleOptionSelect(option)}>
								<span>{option}</span>
							</div>
						))}
					</div>
				</div> */}
			</div>
		</>
	);
};
