import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price } = useLoaderData();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregister";
    const message = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      price,
      customer: name || user?.displayName,
      email,
      phone,
      message,
    };
    console.log(order);

    // if needed validation
    /*     if (phone.length < 10) {
      return alert("Please Phone number should be 10 characters");
    } */

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order Placed Successfully.");
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <div className="p-20">
      <h2 className="text-4xl">Your about to Order : {title}</h2>
      <p className="text-3xl my-3">Price: {price}</p>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-accent w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-accent w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Name"
            className="input input-bordered input-accent w-full"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="input input-bordered input-accent w-full"
            readOnly
          />
        </div>
        <div className="py-4">
          <textarea
            name="message"
            className="textarea textarea-accent w-full"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Place Your Order" className="btn " />
      </form>
    </div>
  );
};

export default Checkout;
