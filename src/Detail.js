import React from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./db/products.json";

export default function Detail() {
  const { id } = useParams();

  const formatNum = (num) => {
    return num.toLocaleString();
  };
  const targetProduct = productData?.find((product) => product.id === id)

  targetProduct.originprice = parseInt(targetProduct.originprice);
  targetProduct.saleprice = parseInt(targetProduct.saleprice);
  const discount = (targetProduct.originprice - targetProduct.saleprice)/100;


  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container mycontainer">
        <div className="row w-100">
          <div className="prodInfoDetail row col-12">
            <div className="col-12 col-md-6">
              <img className="tempimg" src={targetProduct.img} alt="" />
            </div>
            <div className="col-12 col-md-6">
              <ul className="detailInfo">
                <li>{targetProduct.store}</li>
                <li>{targetProduct.prodName}</li>
                <li><strong className="dcPercent detail">{discount}%</strong><span className='origin detail'>{formatNum(targetProduct.originprice)}원</span><em className='saleprice detail d-block d-md-inline d-lg-block d-xl-inline'>{formatNum(targetProduct.saleprice)}<span>원</span></em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
