function filterByOutOfStock(data, outOfStock){
    console.log([...data].filter((item) => (outOfStock ? true : item.inStock)))
    if(outOfStock === true){
        return [...data].filter((item) => (outOfStock ? true : item.inStock));
    }
    
    // console.log(outOfStock);
}

export {filterByOutOfStock};
