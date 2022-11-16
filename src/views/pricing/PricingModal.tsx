import { toast } from "react-toastify";
import { Modal } from "../../components/modal/Modal";
import { selectSubscriptionPrice } from "../../featuers/cart/cartSlice";
import { CheckIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
const PricingModal = ({ id, showPricingModal, setShowPricingModal }: any) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  const subscription = products
    .filter((item) => item.category === "subscription")
    .find((plane) => plane.id === id);

  return (
    <>
      <Modal.Frame
        open={showPricingModal}
        onClose={() => {
          setShowPricingModal(false);
        }}
      >
        <>
          <Modal.Head>
            <>
              <h2 className="text-lg">{subscription?.name}</h2>
            </>
          </Modal.Head>

          <Modal.Body>
            <div className="z-50 pl-8 py-4">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <TrophyIcon className="h-14 w-14  text-black" />
              </div>
              <h2 className="text-xl text-black my-3">{subscription?.name}</h2>
              <h2 className="text-3xl text-primary my-3">
                ${subscription?.price}
                <span className="text-sm">/ month</span>
              </h2>
              <hr />
              <ul className="mt-6 grid grid-cols-2 gap-4 text-black">
                {subscription?.planeItems?.map((item, index) => (
                  <li className="flex items-center gap-1" key={index + item}>
                    {" "}
                    <CheckIcon className="w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-primary shadow-md mt-5 text-sm tracking-widest"
                onClick={() => {
                  setShowPricingModal(false);
                  dispatch(
                    selectSubscriptionPrice(Number(subscription?.price))
                  );
                  toast(`${subscription?.name} Added`);
                }}
              >
                Order Now
              </button>
            </div>
          </Modal.Body>
        </>
      </Modal.Frame>
    </>
  );
};

export default PricingModal;
