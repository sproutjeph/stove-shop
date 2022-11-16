import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OnsiteSupportList,
  OnsiteSupportModal,
  Payment,
  ProductDetailsModal,
  ProductList,
  SoftwareAddOnList,
  SoftwareAddOnModal,
  StarterKit,
} from "../../components";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";
import handheldKit from "@/assets/images/gest-service-kit-2.jpg";
import guestServiceKit from "@/assets/images/guest-service-kit.jpg";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  TrophyIcon,
  GiftIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  calculateTotals,
  selectSubscriptionPrice,
} from "../../featuers/cart/cartSlice";
import { setIncludedItemsToSubscriptionPlane } from "../../featuers/products/productSlice";
import PricingModal from "../pricing/PricingModal";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();
  const { cartItems, subscriptionFee } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.product);

  const [showKit, setShowkit] = useState({
    showCountertopKit: true,
    showCounterCustomerKit: false,
    showGuestServiceKit: false,
    showCounterOnlyKit: false,
    showTableKit: false,
  });

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
      <div className="rounded-md mx-8 bg-white mt-4 p-4 md:p-8">
        <h2 className="mb-4 text-xl text-center text-primary md:text-2xl">
          Please Enter Your Info
        </h2>
        <div className="   grid md:grid-cols-12 gap-4 rounded-md">
          <div className=" md:col-span-6 ">
            <label htmlFor="input-wizard-1" className="form-label">
              Restaurant name
            </label>
            <input type="text" className="form-control"></input>
          </div>
          <div className=" md:col-span-6 ">
            <label htmlFor="input-wizard-1" className="form-label">
              Business name
            </label>
            <input type="text" className="form-control"></input>
          </div>
          <div className=" md:col-span-6 ">
            <label htmlFor="input-wizard-1" className="form-label">
              Legal name
            </label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="md:col-span-6 md:mt-7 md:ml-auto">
            <button className="btn btn-primary w-full md:w-24 ">Next</button>
          </div>
        </div>
      </div>

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
                        setIncludedItemsToSubscriptionPlane(subscription?.name)
                      );
                      dispatch(
                        selectSubscriptionPrice(Number(subscription?.price))
                      );
                      toast(`${subscription?.name} Added`);
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
          {showKit.showCountertopKit && (
            <StarterKit
              kitImg={counterTopKit}
              kitMessage="With STOVE your restaurant is always right at your fingertips,
             offering 24/7 access to our fully interactive management system no matter where
              you are!"
            />
          )}
          {showKit.showCounterCustomerKit && (
            <StarterKit
              kitImg={handheldKit}
              kitMessage="Ensuring your guests a seamless and timely dining experience each and every time can be a challenge, but with STOVE you get endless options to tackle even the toughest of guests."
            />
          )}
          {showKit.showGuestServiceKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}
          {showKit.showCounterOnlyKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}
          {showKit.showTableKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}
        </div>

        <div className="text-2xl mt-4 md:-mt-2">
          <h2 className="text-center">Stove Starter Kits </h2>

          <div
            className={`${
              showKit.showCountertopKit ? "bg-primary text-white" : "bg-white "
            }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
            onClick={() =>
              setShowkit({
                ...showKit,
                showCountertopKit: true,
                showCounterCustomerKit: false,
                showGuestServiceKit: false,
                showCounterOnlyKit: false,
                showTableKit: false,
              })
            }
          >
            <ComputerDesktopIcon className="h-8 w-8" />
            <div className="text-base ml-auto">CounterTopKit</div>
          </div>
          <div
            className={`${
              showKit.showCounterCustomerKit
                ? "bg-primary text-white"
                : "bg-white"
            }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
            onClick={() =>
              setShowkit({
                ...showKit,
                showCounterCustomerKit: true,
                showCountertopKit: false,
                showGuestServiceKit: false,
                showCounterOnlyKit: false,
                showTableKit: false,
              })
            }
          >
            <DevicePhoneMobileIcon className="w-8 h-8" />
            <div className="text-base ml-auto">Counter + Customer Kit</div>
          </div>
          <div
            className={`${
              showKit.showGuestServiceKit ? "bg-primary text-white" : "bg-white"
            }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
            onClick={() =>
              setShowkit({
                ...showKit,
                showGuestServiceKit: true,
                showCountertopKit: false,
                showCounterCustomerKit: false,
                showCounterOnlyKit: false,
                showTableKit: false,
              })
            }
          >
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base ml-auto">Guest Self-Service Kit</div>
          </div>
          <div
            className={`${
              showKit.showCounterOnlyKit ? "bg-primary text-white" : "bg-white"
            }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
            onClick={() =>
              setShowkit({
                ...showKit,
                showCounterOnlyKit: true,
                showCountertopKit: false,
                showCounterCustomerKit: false,
                showGuestServiceKit: false,
                showTableKit: false,
              })
            }
          >
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base ml-auto">Counter Only Kit</div>
          </div>
          <div
            className={`${
              showKit.showTableKit ? "bg-primary text-white" : "bg-white"
            }  rounded-md flex p-2 mt-6 justify-center px-10 md:px-32 items-center cursor-pointer`}
            onClick={() =>
              setShowkit({
                ...showKit,
                showTableKit: true,
                showCountertopKit: false,
                showCounterCustomerKit: false,
                showGuestServiceKit: false,
                showCounterOnlyKit: false,
              })
            }
          >
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base ml-auto">Table Kit</div>
          </div>
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
      <div className="mt-6">
        <Payment />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4 mt-20 md:mt-0">
        <a href="#software">
          <button className="btn btn-primary shadow-md  text-sm ">
            Add Software
          </button>
        </a>
      </div>

      <div className="mt-6 ">
        <SoftwareAddOnList
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
        />
        <SoftwareAddOnModal
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
          showSoftwareAddOnModal={showSoftwareAddOnModal}
        />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4 mt-10 md:mt-0">
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
          <span>$0.0</span>
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
