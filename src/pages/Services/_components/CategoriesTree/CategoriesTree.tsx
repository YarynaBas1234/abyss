import React from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import { RoundIconButton } from 'src/_components';
import { ICategories } from 'src/store';

interface CategoryTreeProps {
	categories: ICategories;
	onActionStart: () => void;
}

export const CategoriesTree: React.FC<CategoryTreeProps> = ({ categories, onActionStart }: any) => {
    
	return (
		<>
			{categories.isRoot && (
				<div className='main-category-wrapper'>
					<div className='category-main'>
						<div className='category-name'>{categories.name}</div>
					</div>
					<div className='category-actions'>
						<RoundIconButton
							onMouseDown={onActionStart}
							icon={<AiFillPlusCircle className='menu-circle-icon' />}
							color='gray'
						/>
					</div>
				</div>
			)}
			{categories.children.length ? (
				<div key={categories.id} className={`category-container ${categories.children.length > 1 ? 'multiple' : ''}`}>
					{categories.children.map((subCategory: ICategories) => {
						return (
							<React.Fragment key={subCategory.id}>
								<div className='category-wrapper'>
									<div className='category-child'>
										<div className={`category-name ${subCategory.children.length ? 'with-children' : ''}`}>
											<span>{subCategory.name}</span>
											<div className='category-actions'>
												<RoundIconButton
													onMouseDown={onActionStart}
													icon={<AiFillPlusCircle className='menu-circle-icon' />}
													color='gray'
												/>
											</div>
										</div>
										{subCategory.children.length
											? subCategory.children.map((subCategoryChildren: ICategories) => (
													<CategoriesTree
														categories={subCategoryChildren}
														onActionStart={onActionStart}
													/>
											  ))
											: null}
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			) : null}
		</>
	);
};
