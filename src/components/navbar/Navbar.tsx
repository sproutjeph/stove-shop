import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars4Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logoUrl from "@/assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { logout } from "../../featuers/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const { totalCartItems } = useAppSelector((state) => state.cart);

  const user = {
    name: "Arron M",
    email: "arron@gmail.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Products", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Solution", path: "/" },
    { name: "Resturant", path: "/" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const logoutUser = () => {
    dispatch(logout());
    navigateTo("/");
  };

  const userNavigation = [
    { name: "Your Profile", action: null },
    { name: "Settings", action: null },
    { name: "Sign out", action: logoutUser },
  ];

  return (
    <>
      <div>
        <Disclosure as="nav" className="bg-primary h-24 backdrop-blur z-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                <div className="flex h-24 items-center justify-between">
                  <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0 cursor-pointer flex">
                      <img className="h-8 w-8" src={logoUrl} alt="Mystove" />
                      <span className="text-white text-lg ml-3 lg:hidden">
                        {" "}
                        Stove{" "}
                      </span>
                    </Link>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-primary`}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full  p-1 text-white hover:text-white relative mr-2 "
                      >
                        {/* <span className="sr-only">Your Cart</span> */}
                        <ShoppingCartIcon
                          className="h-8 w-8"
                          aria-hidden="true"
                          onClick={() => navigateTo("/cart")}
                        />
                        <span className="inline-block absolute w-5 h-5 rounded-full right-[-9px] top-[-6px] bg-white text-primary  items-center ">
                          {totalCartItems}
                        </span>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3 ">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <button
                                    onClick={() => item.action && item.action()}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-900 hover:bg-gray-200">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars4Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-primary ">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 z-10">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.path}
                      className={classNames(
                        // item.current ? "" : "",
                        "block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-primary "
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-slate-900 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-14 w-14 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-100 mt-1">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full  p-1 text-white relative "
                    >
                      <span className="sr-only">My Cart</span>
                      <Disclosure.Button>
                        <ShoppingCartIcon
                          className="h-10 w-10"
                          aria-hidden="true"
                          onClick={() => navigateTo("/cart")}
                        />
                      </Disclosure.Button>
                      <span className="inline-block absolute w-5 h-5 rounded-full right-[-9px] top-[-6px] bg-white text-primary  items-center ">
                        {totalCartItems}
                      </span>
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="button"
                        onClick={() => item.action && item.action()}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-primary"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
