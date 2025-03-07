import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function AppPageLenta({ title, button }) {
  return (
    <div className="lenta_container">
      <div className="lenta_content">
        <div className="lenta_title">
          <h1 className="allLenta_title">{title}</h1>
        </div>
        <div className="lenta_des">
          <p className="allLenta_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque,
            officia repudiandae sequi nemo totam.
          </p>
          <button className="lenta_button">
            <span>{button}</span>
            <span>
              <FaCircleChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
