const getUniqueId = (
	prefix = "id"
) => {
	return (
		`${prefix}-${Math.random().toString(36).substring(2)}`
	);
};

export default getUniqueId;