import { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;

    if (name.length === 0) {
      setError("Give product name");
      return;
    } else if (price.length === 0) {
      setError("Give product price");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
    };
    handleProduct(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Product name" />
        <input type="text" name="price" id="" />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
