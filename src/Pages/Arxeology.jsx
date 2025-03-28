import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Arxeology() {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async (page = 1) => {
    try {
      const response = await fetch(
        `http://subdomain.eskitoshkent.uz/archaeologies/?page=${page}`
      );
      const resp = await response.json();

      setApiData(resp.results);
      setCurrentPage(resp.pagination.currentPage);
      setPageCount(resp.pagination.lastPage);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    fetchData(selectedPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PageTitle title={"Arxeologiya yodgorliklari"} />
      <div className="grid grid-cols-4 mb-10 xl:grid-cols-3 lg:grid-cols-2 md:mt-5 md:grid-cols-1 gap-6 w-[90%] mx-auto">
        {apiData?.map((arxeology) => (
          <div
            className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
            key={arxeology.id}
            onClick={() => navigate(`/arxeologyDetail/${arxeology.id}`)}
          >
            <img
              src={arxeology.image}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-black bg-opacity-50 text-white p-3 rounded-b-lg">
              <h1 className="text-2xl font-semibold line-clamp-1">
                {arxeology.title_uz}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousClassName="previous"
        nextClassName="next"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </div>
  );
}
