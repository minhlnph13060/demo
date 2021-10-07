import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { add } from "./api/productAPI";

const Add = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (product) => {
    try {
      const { data } = await add(product);
      props.onAdd(data);
      history.push("/Albums");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { require: true })}
          placeholder="Name"
        />
        <input type="number" {...register("price")} placeholder="Price" />
        <input type="text" {...register("status")} placeholder="Status" />
        <input type="text" {...register("image")} placeholder="Image" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Add;
