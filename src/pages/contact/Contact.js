import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Customer Details</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Name</label>
            <input
              type="text"
              name="Customer Name"
              placeholder="Customer Name"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Phone Number</label>
            <textarea
              name="number"
              placeholder="Number"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send</button>
          </Card>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
