import React from "react";

const Delete = (props) => {
  console.log(props);
  const removeProduct = async (id) => {
    try {
      await fetch("https://615d43db12571a00172074e7.mockapi.io/use" + id, {
        method: "DELETE",
      });
      props.onDelete(id);
    } catch (error) {}
  };
  return (
    <div>
      {props.products.map((item) => (
        <div>
          {item.name}
          <button onClick={() => removeProduct(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Delete;
