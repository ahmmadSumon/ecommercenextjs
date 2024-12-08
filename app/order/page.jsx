
'use client'; // Enables client-side interactivity

import { useState } from "react";

const OrderDetails = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-[50vh]">
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6 mt-28 my-10 ">
      <h1 className="text-3xl font-bold text-center mb-6">Order Information</h1>

      {/* Ordering Process */}
      <div className="border-b border-gray-200 pb-4">
        <button
          className="w-full text-left font-semibold text-lg flex justify-between items-center"
          onClick={() => toggleSection("orderingProcess")}
        >
          Ordering Process
          <span>{openSection === "orderingProcess" ? "–" : "+"}</span>
        </button>
        {openSection === "orderingProcess" && (
          <div className="mt-4 text-gray-700 space-y-2">
            <p>Here’s how to place an order on our platform:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Select your desired items and add them to your cart.</li>
              <li>Proceed to checkout and provide your shipping details.</li>
              <li>Choose your preferred payment method and complete your order.</li>
              <li>You will receive an order confirmation via email.</li>
              <li>Track your order in your account dashboard.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Shipping Info */}
      <div className="border-b border-gray-200 pb-4">
        <button
          className="w-full text-left font-semibold text-lg flex justify-between items-center"
          onClick={() => toggleSection("shippingInfo")}
        >
          Shipping Info
          <span>{openSection === "shippingInfo" ? "–" : "+"}</span>
        </button>
        {openSection === "shippingInfo" && (
          <div className="mt-4 text-gray-700 space-y-2">
            <p>We aim to deliver your orders quickly and efficiently:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Standard Shipping: Delivered within 5-7 business days.</li>
              <li>Express Shipping: Delivered within 2-3 business days.</li>
              <li>Free shipping on orders above $50.</li>
              <li>Shipping charges are calculated at checkout.</li>
              <li>Track your shipment via the tracking link sent to your email.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Returns & Refunds */}
      <div className="border-b border-gray-200 pb-4">
        <button
          className="w-full text-left font-semibold text-lg flex justify-between items-center"
          onClick={() => toggleSection("returnsRefunds")}
        >
          Returns & Refunds
          <span>{openSection === "returnsRefunds" ? "–" : "+"}</span>
        </button>
        {openSection === "returnsRefunds" && (
          <div className="mt-4 text-gray-700 space-y-2">
            <p>Our return and refund policy ensures your satisfaction:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Items can be returned within 30 days of delivery.</li>
              <li>Products must be unused and in their original packaging.</li>
              <li>Refunds are processed within 5-7 business days after inspection.</li>
              <li>Shipping charges are non-refundable.</li>
              <li>Contact our support team to initiate a return or refund.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;
