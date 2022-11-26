import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PricingModal from "../pricing/PricingModal";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { selectKit } from "../../featuers/products/productSlice";
import {
  TrophyIcon,
  CheckBadgeIcon,
  GiftIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { setIncludedItemsToSubscriptionPlane } from "../../featuers/products/productSlice";
import {
  OnsiteSupportList,
  OnsiteSupportModal,
  Payment,
  ProductDetailsModal,
  ProductList,
  ResturantInfo,
  SoftwareAddOnList,
  SoftwareAddOnModal,
  StarterKit,
} from "../../components";
import {
  calculateTotals,
  selectSubscriptionPrice,
} from "../../featuers/cart/cartSlice";

const HomePage = () => {
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();
  const { cartItems, subscriptionFee, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const { products } = useAppSelector((state) => state.product);

  const [showOnsiteSupportModal, setShowOnsiteSupportModal] = useState(false);
  const [showSoftwareAddOnModal, setShowSoftwareAddOnModal] = useState(false);
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [subscriptionId, setSubcriptionId] = useState("");

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <ResturantInfo />

      <div className="">
        <h2 className="text-center text-2xl mt-6">
          Chose The Right Plan For Your Resturant{" "}
        </h2>

        {/* Begin: subscriptions  */}
        <div className="p-8 grid md:grid-cols-3 gap-4">
          {products
            .filter((item) => item.category === "subscription")
            .map((subscription) => (
              <div
                key={subscription.id}
                className=" hover:bg-primary bg-white rounded-md px-8 py-4  group"
              >
                <div className="flex">
                  <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                    <TrophyIcon className="h-14 w-14" />
                  </div>

                  {subscriptionFee === Number(subscription.price) ? (
                    <CheckBadgeIcon className="h-6 w-6   text-warning ml-auto" />
                  ) : null}
                </div>
                <h2 className="text-whit    text-xl  my-3 ">
                  {subscription.name}
                </h2>
                <h2 className="text-primary text-3xl  my-3 group-hover:text-white">
                  ${subscription.price}
                  <span className="text-sm">/ month</span>
                </h2>
                <div className="flex justify-between">
                  <button
                    className="btn bg-white btn-outline shadow-md mt-5 text-sm tracking-widest"
                    onClick={() => {
                      setSubcriptionId(subscription.id);
                      setShowPricingModal(true);
                    }}
                  >
                    Details
                  </button>
                  <button
                    className="group-hover:bg-warning btn bg-primary text-white ml-auto shadow-md mt-5 text-sm tracking-widest"
                    onClick={() => {
                      dispatch(
                        selectSubscriptionPrice(Number(subscription?.price))
                      );
                      toast(`${subscription?.name} Added`);
                      dispatch(
                        setIncludedItemsToSubscriptionPlane({
                          subscriptionId: subscription.id,
                          subFee: subscriptionFee,
                        })
                      );
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Begin: Starters Image  */}
      <div className="p-8 grid md:grid-cols-2 justify-center gap-8">
        <div className="">
          {products
            .filter((product) => product.category === "kit")
            .map((kit) => {
              if (kit.isActive) {
                return (
                  <StarterKit
                    key={kit.id}
                    kitImg={kit.product_image}
                    kitMessage={kit.description}
                  />
                );
              }
            })}
        </div>

        <div className="text-2xl mt-4 md:-mt-2">
          <h2 className="text-center">Stove Starter Kits </h2>

          <ul>
            {products
              .filter((product) => product.category === "kit")
              .map((kit) => (
                <div
                  key={kit.id}
                  className={`${
                    kit.isActive ? "bg-primary text-white" : "bg-white "
                  }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
                  onClick={() => {
                    dispatch(selectKit(kit.name));
                    toast(`${kit.name} selected`);
                  }}
                >
                  <ComputerDesktopIcon className="h-8 w-8" />
                  <div className="text-base ml-auto">{kit.name}</div>
                </div>
              ))}
          </ul>
        </div>
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4">
        <a href="#product">
          <button className="btn btn-primary shadow-md  text-sm ">
            Build Your Kit
          </button>
        </a>
      </div>
      <div className="mt-6">
        <ProductList setShowProductDetailsModal={setShowProductDetailsModal} />
        <ProductDetailsModal
          setShowProductDetailsModal={setShowProductDetailsModal}
          showProductDetailsModal={showProductDetailsModal}
        />
      </div>
      <div className="mt-20 ">
        <Payment />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4 mt-20 md:mt-0">
        <a href="#software">
          <button className="btn btn-primary shadow-md  text-sm ">
            Add Software
          </button>
        </a>
      </div>

      <div className="mt-20 ">
        <SoftwareAddOnList
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
        />
        <SoftwareAddOnModal
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
          showSoftwareAddOnModal={showSoftwareAddOnModal}
        />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4 mt-20">
        <a href="#support">
          <button className="btn btn-primary shadow-md  text-sm ">
            Add Support
          </button>
        </a>
      </div>
      <div className="mt-6">
        <OnsiteSupportList
          setShowOnsiteSupportModal={setShowOnsiteSupportModal}
        />

        <OnsiteSupportModal
          showOnsiteSupportModal={showOnsiteSupportModal}
          setShowOnsiteSupportModal={setShowOnsiteSupportModal}
        />
        <PricingModal
          setShowPricingModal={setShowPricingModal}
          showPricingModal={showPricingModal}
          id={subscriptionId}
        />
      </div>
      <div className="mt-2 md:text-lg text-base capitalize  text-white bg-primary  items-center mb-8 p-4 grid grid-cols-2 gap-4 md:flex md:gap-10 md:px-20">
        <div className="flex flex-col items-center">
          <h2>one time fee </h2>
          <span>${totalPrice}</span>
        </div>
        <div className="flex flex-col items-center">
          <h2> monthly fee </h2>
          <span>${subscriptionFee}</span>
        </div>
        <div className="flex flex-col items-center">
          <h2>deposit fee </h2>
          <span>$0.0</span>
        </div>
        <div className="flex flex-col items-center">
          <h2>amount due today </h2>
          <span>${subscriptionFee}</span>
        </div>

        <button
          className="btn btn-warning shadow-md col-span-2 text-sm md:ml-auto "
          onClick={() => navigateTo("/cart")}
        >
          Cart Review / Checkout
        </button>
      </div>
    </>
  );
};

export default HomePage;
