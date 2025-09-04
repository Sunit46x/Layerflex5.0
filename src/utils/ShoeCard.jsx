import { useDispatch } from "react-redux";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";

const ShoeCard = ({
  ifSalesExist,
  id,
  color,
  shadow,
  btn,
  rating,
  price,
  title,
  text,
  img,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifSalesExist ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-6 px-6 transition-all duration-700 ease-in-out w-full hover:scale-105 min-h-[22rem]`}
      >
        {/* Text Content */}
        <div
          className={`grid items-center ${
            ifSalesExist ? "justify-items-start" : "justify-items-center"
          }`}
        >
        <h1 className="text-slate-200 text-2xl lg:text-3xl md:text-xl font-semibold filter drop-shadow">
  {title}
</h1>

          { <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p> }

          {/* Price + Rating */}
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              {btn}
            </button>
          </div>
        </div>

        {/* Shoe Image */}
        <div
          className={`flex items-center ${
            ifSalesExist ? "absolute top-6 right-2" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`${
              ifSalesExist
                ? "h-auto w-72 lg:w-64 md:w-56"
                : "h-44 w-72"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
