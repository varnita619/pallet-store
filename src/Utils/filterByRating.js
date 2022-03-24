function filterByRating(data, rating){
    if(!rating){
        return data
    }
    return data.filter((item) => item.rating === rating);
}

export {filterByRating}
