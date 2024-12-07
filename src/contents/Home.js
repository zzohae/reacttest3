import React from "react";
import SwiperBanner from "../contents/SwiperBanner";
import Boardlist from "./Boardlist";
import allData from "../db/allData.json";

export default function Home({ bgcolor, textcolor }) {
  const pagination1 = {
    clickable: true,
    renderBullet: function(index, className) {
      return `<span class="${className}">${allData.mainRWDbanner.bannerData[index].alt}</span>`;
    },
  };
  return (
    <div style={{ background: bgcolor, color: textcolor }}>
      <div className="mainvisual">
        <SwiperBanner
        datakey={allData.mainRWDbanner}
        viewslides={1}
        pagination={pagination1}
        hasrwd={true}
        ></SwiperBanner>
      </div>
      <Boardlist></Boardlist>
    </div>
  );
}
