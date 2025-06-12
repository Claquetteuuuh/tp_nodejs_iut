export const getLastId = (tours) => {
  const ids = tours.map((tour) => tour.id);
  return Math.max(...ids);
};

export const getIndexsOfId = (tours, id) => {
  const indexes = tours
    .map((tour, index) => (tour.id == id ? index : null))
    .filter((index) => index !== null);

  return indexes;
};
