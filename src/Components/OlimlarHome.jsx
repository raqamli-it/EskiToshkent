import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="swiper_olim_container">
   
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 3000, // Delay in milliseconds (3000ms = 3 seconds)
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://cdn.theconversation.com/avatars/1286529/width238/Person_Hannibal_001.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://portraitsrefined.com/wp-content/uploads/2020/03/Smiling-portrait.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="olim_card">
            <div className="olim_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                alt=""
              />
            </div>
            <div className="olim_title">
              <h2 className="olim_name">Bu yerda Olimlarning ismi turadi</h2>
            </div>
            <div className="olim_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                harum.
              </p>
            </div>
            <div className="bottom_dot">
              <span>● ● ●</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
