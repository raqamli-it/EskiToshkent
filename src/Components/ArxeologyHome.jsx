import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Scrollbar, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function LibraryHome() {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DataService.get(endpoints.arxeology);
        setApiData(data.results);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ashyo_home_container">
      <div className="title_container">
        <h1 className="title">Yodgorliklar</h1>
        <Link to="/arxeology">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>

      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          610: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {apiData?.map((arxeologyHome) => {
          return (
            <SwiperSlide key={arxeologyHome.id}>
              <div className="ashyo_home_card">
                <div className="ashyo_home_img">
                  <img src={arxeologyHome.image} alt="img" />
                </div>

                <div
                  className="ashyo_home_title"
                  onClick={() =>
                    navigate(`/arxeologyDetail/${arxeologyHome.id}`)
                  }
                >
                  <h2 className="ashyo_home_name">
                    <span>{arxeologyHome.title_uz}</span>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
