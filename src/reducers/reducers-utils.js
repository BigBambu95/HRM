const filterArr = (items, ...filters) => (
  items.filter((item) => filters.every((filter) => Object.values(item).includes(filter) || filter === 'Все'))
)

export {
  filterArr,
};
