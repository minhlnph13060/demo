import instance from "./instance";

export const getAll = () => {
  const url = `/animals`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/animals/${id}`;
  return instance.get(url);
};

export const add = (product) => {
  const url = `/animals`;
  return instance.post(url, product);
};

export const remove = (id) => {
  const url = `/animals/${id}`;
  return instance.delete(url);
};

export const update = (product) => {
  const url = `/animals/${product.id}`;
  return instance.put(url, product);
};
