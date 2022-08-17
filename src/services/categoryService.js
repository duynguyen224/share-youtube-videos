export const getAllCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/v1/categories`);
    return response.json();
}

export const filterVideoByCategory = async (category) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/v1/videos/filter-by-category?categoryId=${category.id}`);
    return response.json();
}