import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

interface DataLinks {
  name: string;
  url: string;
}

interface Data {
  name: string;
  url: string;
  urls?: DataLinks[];
}

const Pagination = ({ data }: { data: Data }) => {
  const navigate = useNavigate();
  const currentIndex = data.urls.findIndex(
    (url) => url.url === window.location.pathname
  );

  const prevUrl = currentIndex > 0 ? data.urls[currentIndex - 1] : null;
  const nextUrl =
    currentIndex < data.urls.length - 1 ? data.urls[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevUrl) {
      navigate(prevUrl.url);
    }
  };

  const handleNext = () => {
    if (nextUrl) {
      navigate(nextUrl.url);
    }
  };

  return (
    <div className="flex w-full justify-between mt-10">
      <div
        className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-black-300 hover:text-black-800 dark:text-gray-300 dark:hover:text-gray-100"
        onClick={handlePrev}
      >
        {prevUrl ? <><IoIosArrowBack /> {prevUrl.name}</> : ''}
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-black-300 hover:text-black-800 dark:text-gray-300 dark:hover:text-gray-100"
        onClick={handleNext}
      >
        {nextUrl ? <>{nextUrl.name}<IoIosArrowForward/> </> : ''}
      </div>
    </div>
  );
};

export default Pagination;
