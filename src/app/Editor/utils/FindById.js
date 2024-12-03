// helper.js
export const findById = (data, id) => {
  if (Array.isArray(data)) {
    for (let item of data) {
      const found = findById(item, id);
      if (found) return found;
    }
  } else if (data.id === id) {
    return data;
  } else if (data.children) {
    return findById(data.children, id);
  }
  return null;
};
