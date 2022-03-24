function uniqueCategory(data, category) {
    const categoryName = data.map((eachProduct) => eachProduct[category])
    return ([...new Set(categoryName)])
}

export { uniqueCategory };
