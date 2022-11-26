import React, { useEffect } from "react";
import imgaeHolder from "../../assets/images/200x200.jpg";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import { addToCart } from "../../featuers/cart/cartSlice";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { IProduct } from "../../utils/types";
import { setIncludedItemsToSubscriptionPlane } from "../../featuers/products/productSlice";

const OnsiteSupportList = ({ setShowOnsiteSupportModal }: any) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    support: IProduct
  ) {
    if (e.target.checked === true) {
      dispatch(addToCart({ cartItem: support, qty: 1 }));
    }
  }
  function isIncluded() {
    return products
      .filter((support) => support.category === "support")
      .map((includedItem) => {
        if (includedItem.includedInPlane === true)
          return dispatch(addToCart({ cartItem: includedItem, qty: 1 }));
      });
  }
  useEffect(() => {
    isIncluded();
  }, []);

  return (
    <>
      <section className="" id="support">
        <div className="">
          <h2 className="text-4xl text-center text-primary tracking-wide">
            Onsite Support
          </h2>
        </div>
        <div className="px-4 md:px-8 grid grid-cols-12 gap-6 mt-2 md:mt-0 ">
          <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
            <table className=" table table-report -mt-2">
              <thead>
                <tr>
                  <th className=" whitespace-nowrap">Image</th>
                  <th className="text-center whitespace-nowrap">Support</th>
                  <th className="text-center whitespace-nowrap">Description</th>
                  <th className="text-center whitespace-nowrap">Part Number</th>
                  <th className="text-center whitespace-nowrap">Price</th>
                  <th className="text-center whitespace-nowrap">Category</th>
                  <th className="text-center whitespace-nowrap">Active</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter((product) => product.category === "support")
                  .map((support) => (
                    <tr key={support.id} className="intro-x">
                      <td className="text-center">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <img
                              alt=""
                              className="rounded-full"
                              src={imgaeHolder || support.product_image}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button
                          className="font-medium whitespace-nowrap"
                          onClick={() => setShowOnsiteSupportModal(true)}
                        >
                          {support.name}
                        </button>
                      </td>
                      <td className="text-center">
                        {support.description || support.name}
                      </td>
                      <td className="text-center">{support.part_number}</td>
                      <td className="text-center ">${support.price}</td>
                      <td className="text-center ">{support.category}</td>

                      <td className="">
                        <div className="justify-center form-check form-switch">
                          <input
                            id="product-status-active"
                            className="check-box"
                            type="checkbox"
                            defaultChecked={support.includedInPlane}
                            onChange={(e) => {
                              onChangeHandler(e, support);
                              console.log(e.target.checked);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BEGIN: Pagination -*/}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap px-2 md:px-8">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronDoubleLeftIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronLeftIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronDoubleRightIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 mt-3 form-select box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination -*/}
      </section>
    </>
  );
};

export default OnsiteSupportList;
