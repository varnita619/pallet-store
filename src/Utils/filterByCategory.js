function filterByCategory(data, category) {
    const copy = [...data]

    if (category.length !== 0) {
        return copy.filter((eachProduct) => category.includes(eachProduct.category))
    }

    return copy
}

export { filterByCategory };
