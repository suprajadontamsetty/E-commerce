import { useEffect, useState, useContext } from "react";
import Title from "../components/title";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";
import CartTotal from "../components/carttotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"} border-t pt-14 min-h-screen`}>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded-md"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className={`py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p
                      className={`px-2 sm:px-3 sm:py-1 border ${
                        theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-slate-50 text-gray-700"
                      }`}
                    >
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
                className={`border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ${
                  theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-700 border-gray-300"
                }`}
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className={`text-sm my-8 px-8 py-3 ${
                theme === "dark" ? "bg-gray-700 text-white" : "bg-black text-white"
              }`}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
