import React from "react";
import "react-quill/dist/quill.snow.css";
import Card from "../../components/card/Card";
import "./order.scss";
const Order = ({
  order,
  handleInputChange,
  saveOrder,
}) => {
  return (
    <div className="add-order">
        <form onSubmit={saveOrder}>
          <label>Customer Name:</label>
          <input
            type="text"
            placeholder="Customer name"
            name="name"
            value={order?.name}
            onChange={handleInputChange}
          />

          <label> Category:</label>
          <input
            type="text"
            placeholder=" Category"
            name="category"
            value={order?.category}
            onChange={handleInputChange}
          />
          <label>Price Value:</label>
          <input
            type="text"
            placeholder="Price Value"
            name="price"
            value={order?.price}
            onChange={handleInputChange}
          />

          <label>Quantity:</label>
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            value={order?.quantity}
            onChange={handleInputChange}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Order
            </button>
          </div>
        </form>
         </div>
  );
};

Order.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
Order.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default Order;
