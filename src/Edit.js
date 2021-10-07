import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { update, get } from "./api/productAPI";
import React from "react";

const Edit = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState({});

  useEffect(() => {
    get(id).then((response) => {
      setProducts(response.data);
      // reset(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    update(product).then((response) => {
      props.onUpdate(response.data);
    });
  };
  return (
    <>
      {JSON.stringify(products)}
      <hr />
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={products.name} {...register("Name")} />
        <br />
        <input
          type="number"
          defaultValue={products.price}
          {...register("Price")}
        />
        <br />
        <input
          type="text"
          defaultValue={products.status}
          {...register("Status")}
        />
        <br />
        <input
          type="text"
          defaultValue={products.image}
          {...register("Image")}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Edit;
