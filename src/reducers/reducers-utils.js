const filterArr = (items, ...filters) => {
  const filteredItems = items.filter((item) => {
    const values = Object.values(item);
    return filters.every((filter) => values.includes(filter) || filter === 'Все');
  });

  return filteredItems;
};

export {
  filterArr,
};
