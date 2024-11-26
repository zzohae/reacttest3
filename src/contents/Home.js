import React from "react";
import SwiperBanner from "../contents/SwiperBanner";
import Boardlist from "./Boardlist";
import allData from "../db/allData.json";

export default function Home({ bgcolor, textcolor, vh }) {
  return (
    <div style={{ background: bgcolor, color: textcolor, height: vh }}>
      <SwiperBanner
      datakey={allData.bannerData}
      viewslides={1}
      ></SwiperBanner>
      <Boardlist datakey={allData.mainPagetitle}></Boardlist>
    </div>
  );
}
