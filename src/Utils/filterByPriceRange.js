function filterByPriceRange(data, price){
    return[
        ...data.filter((item)=> Number(item.price) <= price)
    ]
}

export {filterByPriceRange};
