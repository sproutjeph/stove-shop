import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../stores/hooks";
import imgaeHolder from "../../assets/images/200x200.jpg";
import { addToCart } from "../../featuers/cart/cartSlice";
import { useAppDispatch } from "../../stores/hooks";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { IProduct } from "../../utils/types";

const ProductList = ({ setShowProductDetailsModal }: any) => {
  const dispatch = useAppDispatch();
  const [params, setParams] = useSearchParams();

  const { products, activeKitName } = useAppSelector((state) => state.product);

  function onChangeHandler(
    cartItem: IProduct,
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const qty = Number(e.target.value);
    dispatch(addToCart({ cartItem, qty }));
    toast(`${cartItem.name} Add to Cart`);
  }

  function isIncluded() {
    return products
      .filter((support) => support.category === "product")
      .map((includedItem) => {
        if (includedItem.includedInPlane === true)
          return dispatch(addToCart({ cartItem: includedItem, qty: 1 }));
      });
  }
  useEffect(() => {
    isIncluded();
  }, [activeKitName]);

  return (
    <section className="h-screen " id="product">
      <div className="">
        <h2 className="text-4xl text-center text-primary tracking-wider">
          Products
        </h2>
      </div>
      <div className="px-4 md:px-8 grid grid-cols-12 gap-6 mt-5 overflow-y-scroll h-[90%] scrollbar-hide">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible mb-8">
          <table className=" table table-report -mt-2">
            <thead>
              <tr>
                <th className=" whitespace-nowrap">Product Image</th>
                <th className=" whitespace-nowrap">Product NAME</th>
                <th className="text-center whitespace-nowrap">Description</th>
                <th className="text-center whitespace-nowrap">Part Number</th>
                <th className="text-center whitespace-nowrap">Product Price</th>
                <th className="text-center whitespace-nowrap">
                  Default Currency
                </th>
                <th className="text-center whitespace-nowrap">QTY</th>
              </tr>
            </thead>
            <tbody className="">
              {products
                .filter((product) => product.category === "product")
                .map((product) => {
                  const setIncludedValue = () => {
                    if (product.includedInPlane && activeKitName !== "Custom") {
                      return 1;
                    } else {
                      return 0;
                    }
                  };
                  return (
                    <tr key={product.id} className="intro-x ">
                      <td className="text-center">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <img
                              alt=""
                              className="rounded-full"
                              src={imgaeHolder || product.product_image}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="">
                        <button
                          className="font-medium whitespace-nowrap"
                          onClick={() => {
                            setParams({
                              ...params,
                              productId: `${product.id}`,
                            });

                            setShowProductDetailsModal(true);
                          }}
                        >
                          {product.name}
                        </button>
                      </td>
                      <td className="text-center">
                        {product.description.substring(0, 25) || product.name}
                        ...
                      </td>
                      <td className="text-center ">{product.part_number}</td>
                      <td className="text-center ">$ {product.price}</td>
                      <td className="text-center ">USD</td>

                      <td className="text-center">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          defaultValue={setIncludedValue()}
                          onChange={(e) => {
                            onChangeHandler(product, e);
                          }}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
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
  );
};

export default ProductList;
