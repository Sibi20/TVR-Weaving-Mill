// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
// import Order from "../order/Order";
// import {
//   createOrder,
//   selectIsLoading,
// } from "../../redux/features/product/orderSlice";

// const initialState = {
//   name: "",
//   category: "",
//   quantity: "",
//   price: "",
//   image:"",
// };

// const AddOrder = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(initialState);
//   const [orderImage, setOrderImage] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

//   const { name, category, price, quantity,image } = order;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOrder({ ...order, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setOrderImage(e.target.files[0]);
//     setImagePreview(URL.createObjectURL(e.target.files[0]));
//   };

//   const generateKSKU = (category) => {
//     const letter = category.slice(0, 3).toUpperCase();
//     const number = Date.now();
//     const sku = letter + "-" + number;
//     return sku;
//   };

//   const saveOrder = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("sku", generateKSKU(category));
//     formData.append("category", category);
//     formData.append("quantity", Number(quantity));
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("image", orderImage);

//     console.log(...formData);

//     await dispatch(createOrder(formData));

//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <h3 className="--mt">Add New Order</h3>
//       <Order
//         order={order}
//         orderImage={orderImage}
//         imagePreview={imagePreview}
//         description={description}
//         setDescription={setDescription}
//         handleInputChange={handleInputChange}
//         handleImageChange={handleImageChange}
//         saveOrder={saveOrder}
//       />
//     </div>
//   );
// };

// export default AddOrder;






// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
// import AddorderForm from "../../components/product/productForm/addOrderForm";
// import {
//   createOrder,
//   selectIsLoading,
// } from "../../redux/features/product/orderSlice";

// const initialState = {
//   name: "",
//   category: "",
//   quantity: "",
//   price: "",
//   image:"",
// };

// const AddOrder = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(initialState);
//   const [orderImage, setOrderImage] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

//   const { name, category, price, quantity,image} = order;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOrder({ ...order, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setOrderImage(e.target.files[0]);
//     setImagePreview(URL.createObjectURL(e.target.files[0]));
//   };

//   const generateKSKU = (category) => {
//     const letter = category.slice(0, 3).toUpperCase();
//     const number = Date.now();
//     const sku = letter + "-" + number;
//     return sku;
//   };

//   const saveOrder = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("sku", generateKSKU(category));
//     formData.append("category", category);
//     formData.append("quantity", Number(quantity));
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("image", orderImage);

//     console.log(...formData);

//     await dispatch(createOrder(formData));

//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <h3 className="--mt">Add New Order</h3>
//       <AddorderForm
//         order={order}
//         orderImage={orderImage}
//         imagePreview={imagePreview}
//         description={description}
//         setDescription={setDescription}
//         handleInputChange={handleInputChange}
//         handleImageChange={handleImageChange}
//         saveOrder={saveOrder}
//       />
//     </div>
//   );
// };

// export default AddOrder;




import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProductForm from "../../components/product/productForm/ProductForm";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
  image:"",
};

const AddOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");

  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, quantity,image } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateKSKU(category));
    formData.append("category", category);
    formData.append("quantity", Number(quantity));
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", productImage);

    console.log(...formData);

    await dispatch(createProduct(formData));

    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddOrder;

