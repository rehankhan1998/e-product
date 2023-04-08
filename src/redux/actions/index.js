// for the adding

export const addCart = (product) => {
  console.log("item: " + product);

  return {
    type: "ADDITEM",
    payload: product,
  };
};

// delete

export const delcart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
