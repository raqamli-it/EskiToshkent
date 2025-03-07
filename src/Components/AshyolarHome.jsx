import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function AshyolarHome() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.ashyo);
      setApiData(response.results);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="ashyo_home_container">
      <div className="title_container">
        <h1 className="title">Ashyolar</h1>
        <Link to="/ashyolar">
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
          delay: 5000, // Delay in milliseconds
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
        className="mySwiper"
      >
        {apiData?.map((ashyoHome) => (
          <SwiperSlide key={ashyoHome.id}>
            <div className="ashyo_home_card">
              <div className="ashyo_home_img">
                <img src={ashyoHome.image} alt={ashyoHome.title} />
              </div>
              <div
                className="ashyo_home_title"
                onClick={() => navigate(`/arxeplogyaAshyolari/${ashyoHome.id}`)}
              >
                <h2 className="ashyo_home_name">
                  <span>{ashyoHome.title_uz}</span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
