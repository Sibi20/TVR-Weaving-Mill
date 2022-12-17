import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

import {
  getOrder,
  getOrders,
  selectIsLoading,
  selectOrder,
  updateOrder,
} from "../../redux/features/order/orderSlice";

const EditOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const orderEdit = useSelector(selectOrder);

  const [order, setOrder] = useState(orderEdit);
  const [orderImage, setOrderImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  useEffect(() => {
    setOrder(orderEdit);

    setImagePreview(
      orderEdit && orderEdit.image ? `${orderEdit.image.filePath}` : null
    );

    setDescription(
      orderEdit && orderEdit.description ? orderEdit.description : ""
    );
  }, [orderEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleImageChange = (e) => {
    setOrderImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", order?.name);

    formData.append("category", order?.category);
    formData.append("quantity", order?.quantity);
    formData.append("price", order?.price);
    formData.append("description", description);
    if (orderImage) {
      formData.append("image", orderImage);
    }

    console.log(...formData);

    await dispatch(updateOrder({ id, formData }));
    await dispatch(getOrders());
    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Edit Order</h3>
      <OrderForm
        order={order}
        orderImage={orderImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveOrder={saveOrder}
      />
    </div>
  );
};

export default EditOrder;
