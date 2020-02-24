export const orderTaxonomyByParent = (id, data) =>
	data
		.filter(({ parent }) => parent === id)
		.map(({ id, name, parent }) => {
			const children = orderTaxonomyByParent(id, data);
			return {
				parent,
				name,
				id,
				...(children.length > 0 && { children }),
			};
		});
