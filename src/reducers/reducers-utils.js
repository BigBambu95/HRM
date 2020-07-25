const filterArr = (items, ...filters) => {
    const filteredItems = items.filter(item => {
        let values = Object.values(item);
        return filters.every(filter => {
            return values.includes(filter) || filter === 'Все';
        });
    });

    return filteredItems;
};

export {
    filterArr
}