import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <button
        className="btn btn-primary ml-8 mt-4 py-[2px] px-4"
        title="Back to Products"
        onClick={() => navigateTo("../")}
      >
        <ArrowLeftIcon className="h-6 w-6 text-white  cursor-pointer" />
      </button>
      <div>Profile</div>
    </>
  );
};

export default Profile;
