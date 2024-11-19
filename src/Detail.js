import React from "react";
import { useParams, Link } from "react-router-dom";
import productData from "./db/products.json";
import QuantityCounter from "./QuantityCounter";

export default function Detail() {
  const formatNum = (num) => {
    return num.toLocaleString();
  };
  const { id } = useParams();
  const targetProduct = productData?.find((product) => product.id == id)

  targetProduct.originprice = parseInt(targetProduct.originprice);
  targetProduct.saleprice = parseInt(targetProduct.saleprice);
  const discount = parseInt((targetProduct.originprice - targetProduct.saleprice) / targetProduct.originprice * 100);

  

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container mycontainer">
        <div className="row w-100">
          <div className="prodInfoDetail row col-12">
            <div className="col-12 col-md-6">
              <img className="tempimg" src={`/assets/img/product/${targetProduct.img}.jpg`} alt={targetProduct.prodName} />
            </div>
            <div className="col-12 col-md-6">
              <ul className="detailInfo">
                <li>{targetProduct.store}</li>
                <li>{targetProduct.prodName}</li>
                <li className="d-flex align-items-end gap-1"><strong className="dcPercent detail">{discount}%</strong><span className='origin detail'>{formatNum(targetProduct.originprice)}원</span><em className='saleprice detail d-block d-md-inline d-lg-block d-xl-inline'>{formatNum(targetProduct.saleprice)}<span>원</span></em></li>
                <li>{targetProduct.simpleExp}</li>
                <li>별이다섯개~</li>
              </ul>
              <Link>회원가입쿠폰버튼~~</Link>
              <form action="">
                <select name="" id="">
                  <option value="">우리시장 빠른배송</option>
                  <option value="">일반배송</option>
                </select>
                <ul>
                  <li><span className="me-2">판매 단위</span>{targetProduct.sellUnit}</li>
                  <li><span className="me-2">중량 · 용량</span>{targetProduct.volume}</li>
                </ul>
                <div className="row" style={{backgroundColor:'yellow'}}>
                  <p className="w-100">{targetProduct.prodName}({targetProduct.volume})</p>
                  <QuantityCounter 
                    stock={targetProduct.stock} 
                    saleprice={targetProduct.saleprice} 
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
