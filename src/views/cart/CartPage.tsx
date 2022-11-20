import { useNavigate } from "react-router-dom";
import itemImg1 from "@/assets/images/counter-top-kit.jpg";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import {
  increaseItem,
  decreaseItem,
  calculateTotals,
  removeItem,
} from "../../featuers/cart/cartSlice";
import {
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const CartPage = () => {
  const navigateTo = useNavigate();
  const dispath = useAppDispatch();
  const { cartItems, totalPrice, subscriptionFee } = useAppSelector(
    (state) => state.cart
  );

  return (
    <>
      <div className="mt-2 justify-center capitalize   bg-white  items-center  p-4 grid grid-cols-2 gap-4 md:flex md:gap-10">
        <div className="flex flex-col items-center">
          <h2>one time fee </h2>
          <span>${totalPrice}</span>
        </div>
        <div className="flex flex-col items-center">
          <h2> monthly fee </h2>
          <span className="text-primary text-lg">${subscriptionFee}</span>
        </div>
        <div className="flex flex-col items-center">
          <h2>deposit fee </h2>
          <span>$0.0</span>
        </div>
        <div className="flex flex-col items-center">
          <h2>amount due today </h2>
          <span>$0.0</span>
        </div>
      </div>
      <button
        className="btn btn-primary ml-8 my-4 py-[2px] px-4"
        title="Back to Products"
        onClick={() => navigateTo("../")}
      >
        <ArrowLeftIcon className="h-6 w-6 text-white  cursor-pointer" />
      </button>

      <div className="p-4 md:p-8 ">
        <div className=" max-w-xl md:max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-thin tracking-wide">
            Your Cart Looks Good
          </h2>
          <h6 className="text-sm mt-2">
            Review your order, then continue to checkout.
          </h6>
        </div>
        <ul className="grid xl:grid-cols-2 gap-4 justify-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid md:grid-cols-2 max-w-2xl bg-white mt-4 p-4 rounded-md"
            >
              <div className="">
                <div className="max-w-lg mb-2 mx-auto md:mx-0 md:w-60 h-48">
                  <img
                    src={itemImg1}
                    alt={item.name}
                    className="rounded-md h-full w-full "
                  />
                </div>
                <button
                  className="btn hidden md:block bg-red-200 mt-12"
                  onClick={() => {
                    dispath(removeItem({ id: item.id }));
                    dispath(calculateTotals());
                  }}
                >
                  Remove
                </button>
              </div>

              <div className="max-w-md">
                <div className="text-center md:text-left">
                  <h2 className="text-primary tracking-wider text-2xl md:text-2xl">
                    {item.name}
                  </h2>
                  <p className=" text-sm  mt-2 md:text-sm ">
                    {item.description ||
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, fugiat. adipisicing elit. Harum, fugiat. elit. Harum, fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, fugiat. adipisicing elit. Harum, fugiat. elit. Harum, fugiat. "}
                  </p>
                </div>

                <div className="flex flex-col gap-y-8 mb-4 mt-6 items-center md:items-start ">
                  <h2 className="text-2xl tracking-widest">
                    Price : ${item.price}
                  </h2>
                  <div className="flex gap-4">
                    <button
                      className="py-1 px-2 rounded-md bg-warning"
                      onClick={() => {
                        dispath(decreaseItem({ id: item.id }));
                        dispath(calculateTotals());
                      }}
                    >
                      <MinusIcon className="w-6 h-6" />
                    </button>
                    <span className="text-lg  text-green-700">
                      {item.amount}
                    </span>
                    <button
                      className="py-1 px-2 rounded-md bg-green-500 text-white"
                      onClick={() => {
                        dispath(increaseItem({ id: item.id }));
                        dispath(calculateTotals());
                      }}
                    >
                      <PlusIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>

        <div className=" my-8 border border-slate-500 p-4  max-w-md md:ml-auto ">
          <div className="grid grid-cols-2 gap-2 justify-center place-items-center text-lg border-slate-500 tracking-widest border-b-[1px] pb-4">
            <h2 className="">Subtotal</h2>
            <h2 className="text-green-500">$ {totalPrice}</h2>
            <h2 className="">Monthly Fee</h2>
            <h2 className="text-green-500">$ {subscriptionFee}</h2>
          </div>
          <div className="flex justify-between text-black text-2xl mt-4">
            <h1 className="">Order Total :</h1>
            <h1 className="">$ {totalPrice + subscriptionFee}</h1>
          </div>
        </div>

        <div className="flex">
          <div />
          <button
            className="bg-primary w-full btn text-white text-lg tracking-widest max-w-md ml-auto "
            onClick={() => navigateTo("/checkout")}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
