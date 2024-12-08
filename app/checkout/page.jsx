'use client'; // Mark as client-side component

import { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your checkout logic here, e.g., API call or redirect to payment gateway
    console.log('Checkout data:', formData);
    alert('Order placed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-28 my-10 ">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full bg-gray-400 py-3 text-white rounded-md shadow-sm sm:text-sm"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Shipping Address */}
        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Payment Details */}
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 py-3 text-white sm:text-sm"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
