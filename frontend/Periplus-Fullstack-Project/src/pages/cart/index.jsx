import { useState } from "react";
import images from "../../components/image/imageGalery"; // Assuming you have imported your images correctly
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";

import Layout from "../layout";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "The Steampunk Tarot: Wisdom from the Gods of the Machine (With Cards)",
      price: 198000,
      ihsb: 9780804843522,
      points: 396,
      image: images?.dummyBook, // Replace with your actual image import
      quantity: 1, // Initialize quantity for each item
    },
    {
      id: 2,
      title: "Everyday Tarot Mini Tarot Deck",
      price: 235000,
      ihsb: 9780804843522,
      points: 470,
      image: images?.dummyBook, // Replace with your actual image import
      quantity: 1, // Initialize quantity for each item
    },
    {
      id: 3,
      title: "The Steampunk Tarot: Wisdom from the Gods of the Machine (With Cards)",
      price: 198000,
      ihsb: 9780804843522,
      points: 396,
      image: images?.dummyBook, // Replace with your actual image import
      quantity: 1, // Initialize quantity for each item
    },
    {
      id: 4,
      title: "Everyday Tarot Mini Tarot Deck",
      price: 235000,
      ihsb: 9780804843522,
      points: 470,
      image: images?.dummyBook, // Replace with your actual image import
      quantity: 1, // Initialize quantity for each item
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
  
      // Update quantity for the item
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
   
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col pt-[150px] bg-white p-8"
         style={{
          backgroundImage: `url(${images?.mainBg})`,
        }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between h-[220px] items-center bg-white shadow-md p-4 mb-2"
          >
            <div>
              <img src={item.image} alt={item.title} className="w-20 h-20" />
            </div>
            <div className="flex-col justify-between ml-4 flex-grow">
              <p className="font-bold text-sm mb-2">{item.title}</p>
              <div className=" text-sm  text-gray-500">
                {item.ihsb}
              </div>
              <div className="text-gray-900 text-sm">
                Rp {item.price.toLocaleString()} or {item.points} Points
              </div>
              <div className="flex items-center mt-4">
                <div className="w-12 text-center border border-gray-300 text-gray-500">
                <button
                className="w-full h-full  py-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                  
                </div>
              <div className="w-12 text-gray-500 text-center border border-gray-300 py-2">
                {item.quantity}
              </div >
                  <div className="w-12 text-center border border-gray-300  text-gray-500">
                  <button
                  className="w-full h-full py-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  
                >
                  +
                </button>
                    
                  </div>

              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-gray-300 text-gray-700 px-7 py-1 mt-4 hover:bg-orange-400 text-xs "
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white shadow-md p-4">
          <div className="flex space-x-4">
            <button className=" px-4 py-2 mt-4 text-sm font-bold">UPDATE</button>
            <button className="bg-gray-900 text-white px-4 py-2 mt-4 hover:bg-orange-400 text-sm font-bold">
              CONTINUE SHOPPING
            </button>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <div>
              <span className="">Sub-Total:</span>
              <span className=""> Rp {subtotal.toLocaleString()}</span>
            </div>
            <div>
              <span className="">Total:</span>
              <span className=""> Rp {subtotal.toLocaleString()}</span>
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 mt-4 hover:bg-orange-400 text-sm ">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
