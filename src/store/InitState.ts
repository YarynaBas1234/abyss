export interface ICategories {
	id: string;
	isRoot?: boolean;
	isEdit?: boolean;
	name: string;
	children: ICategories[];
}

export const categories: ICategories = {
	id: '123',
	isRoot: true,
	isEdit: false,
	name: 'Categories',
	children: [
		{ id: '1233', name: 'Category1', children: [] },
		{ id: '1234', name: 'Category2', children: [] },
	],
};
