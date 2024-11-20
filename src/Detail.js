import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import productData from "./db/products.json";
import QuantityCounter from "./QuantityCounter";
import { Btn } from "./ui/commonui";
import products from './db/products.json';
import Product from './ui/Product';
import Bestreview from './Bestreview';

export default function Detail() {
  const formatNum = (num) => {
    return num.toLocaleString();
  };
  const { id } = useParams();
  const targetProduct = productData?.find((product) => product.id == id)

  targetProduct.originprice = parseInt(targetProduct.originprice);
  targetProduct.saleprice = parseInt(targetProduct.saleprice);
  const discount = parseInt((targetProduct.originprice - targetProduct.saleprice) / targetProduct.originprice * 100);


  const [activeTab, setActiveTab] = useState('detail');
  const [isExpanded, setIsExpanded] = useState(false);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['detail', 'review', 'question', 'purchase'];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveTab(sections[i]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const relatedProducts = products.slice(0, 5);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container mycontainer">
        <div className="row">
          <div
            className="prodInfoDetail d-flex wrap"
            style={{ paddingBottom: "60px", borderBottom: "2px solid #214AEE" }}
          >
            <div className="col-12 col-lg-6">
              <img
                className="tempimg"
                src={`/assets/img/product/${targetProduct.img}.jpg`}
                alt={targetProduct.prodName}
              />
            </div>
            <div className="col-12 col-lg-6">
              <ul className="detailInfo">
                <li>{targetProduct.store}</li>
                <li>{targetProduct.prodName}</li>
                <li className="d-flex align-items-end gap-1">
                  <strong className="dcPercent detail">{discount}%</strong>
                  <span className="origin detail">
                    {formatNum(targetProduct.originprice)}원
                  </span>
                  <em className="saleprice detail d-block d-md-inline d-lg-block d-xl-inline">
                    {formatNum(targetProduct.saleprice)}
                    <span>원</span>
                  </em>
                </li>
                <li>{targetProduct.simpleExp}</li>
                <li>별이다섯개~</li>
                <li>
                  <span className="me-2">판매 단위</span>
                  {targetProduct.sellUnit}
                </li>
                <li>
                  <span className="me-2">중량 · 용량</span>
                  {targetProduct.volume}
                </li>
              </ul>
              <Link>회원가입쿠폰버튼~~</Link>
              <form action="">
                <select name="" id="">
                  <option value="">우리시장 빠른배송</option>
                  <option value="">일반배송</option>
                </select>
                <div
                  className="d-flex flex-column"
                  style={{ backgroundColor: "#F3F3F3", borderRadius:'5px' }}
                >
                  <p className="w-100">
                    {targetProduct.prodName}({targetProduct.volume})
                  </p>
                  <QuantityCounter
                    stock={targetProduct.stock}
                    saleprice={targetProduct.saleprice}
                  />
                </div>
                <div className="d-flex" style={{ gap: "20px" }}>
                  <Btn
                    version="v1"
                    page="detail"
                    className="border-lighter"
                    style={{ padding: "0", width: "60px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="30"
                      viewBox="0 0 28 30"
                      fill="none"
                    >
                      <path
                        d="M17.75 0C20.4424 0 22.625 2.18261 22.625 4.875C22.625 5.84183 22.3436 6.74292 21.8581 7.50081L25.625 7.5C26.6606 7.5 27.5 8.33946 27.5 9.375V14.625C27.5 15.5316 26.8565 16.2879 26.0014 16.4622L26 25.125C26 27.7245 23.9653 29.8488 21.4016 29.9923L21.125 30H6.875C4.27545 30 2.15112 27.9653 2.00771 25.4016L2 25.125L2.00008 16.4625C1.14421 16.2888 0.5 15.5322 0.5 14.625V9.375C0.5 8.33946 1.33946 7.5 2.375 7.5L6.14189 7.50081C5.65645 6.74292 5.375 5.84183 5.375 4.875C5.375 2.18261 7.5576 0 10.25 0C11.7583 0 13.1066 0.68499 14.0009 1.76086C14.8934 0.68499 16.2417 0 17.75 0ZM12.875 16.4985H4.25V25.125C4.25 26.5023 5.31067 27.6318 6.65971 27.7413L6.875 27.75H12.875V16.4985ZM23.75 16.4985H15.125V27.75H21.125C22.5023 27.75 23.6318 26.6893 23.7413 25.3402L23.75 25.125V16.4985ZM12.875 9.75H2.75V14.25L12.875 14.2485V9.75ZM25.25 14.25V9.75H15.125V14.2485L25.25 14.25ZM17.75 2.25C16.3003 2.25 15.125 3.42525 15.125 4.875V7.4985H17.786L17.9653 7.4913C19.3144 7.38179 20.375 6.25225 20.375 4.875C20.375 3.42525 19.1998 2.25 17.75 2.25ZM10.25 2.25C8.80025 2.25 7.625 3.42525 7.625 4.875C7.625 6.25225 8.68567 7.38179 10.0347 7.4913L10.214 7.4985H12.875V4.875L12.8663 4.65971C12.7568 3.31067 11.6273 2.25 10.25 2.25Z"
                        fill="#666666"
                      />
                    </svg>
                  </Btn>
                  <div
                    className="d-flex"
                    style={{ gap: "28px", objectFit: "cover" }}
                  >
                    <Btn version="v1" page="detail" className="border-lighter">
                      장바구니
                    </Btn>
                    <Btn version="v3" page="detail" className="border-none">
                      구매하기
                    </Btn>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="d-flex col-12 justify-content-between gap-2"
            style={{ paddingTop: "60px", overflowX: "scroll" }}
          >
            {relatedProducts.map((p, index) => (
              <Product
                rowclass=""
                prdId={p.id}
                promobadge={p.promobadge}
                img={`/assets/img/product/${p.img}.jpg`}
                prodName={p.prodName}
                store={p.store}
                originprice={p.originprice}
                saleprice={p.saleprice}
              />
            ))}
          </div>
          <div>
            <ul
              className="d-flex align-items-end sticky-top bg-white"
              style={{ top: "65px", zIndex: "100" }}
            >
              <li className="col-3">
                <Link
                  to="#"
                  className={`nav-link ${
                    activeTab === "detail" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("detail");
                  }}
                >
                  상세정보
                </Link>
              </li>
              <li className="col-3">
                <Link
                  to="#"
                  className={`nav-link ${
                    activeTab === "review" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("review");
                  }}
                >
                  상품후기
                </Link>
              </li>
              <li className="col-3">
                <Link
                  to="#"
                  className={`nav-link ${
                    activeTab === "question" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("question");
                  }}
                >
                  상품문의
                </Link>
              </li>
              <li className="col-3">
                <Link
                  to="#"
                  className={`nav-link ${
                    activeTab === "purchase" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("purchase");
                  }}
                >
                  구매안내
                </Link>
              </li>
            </ul>

            <div className="content row text-center">
              <div
                id="detail"
                className="section detailsect mt-4 col-12"
                style={{ height: "auto", paddingTop: "110px" }}
              >
                <div
                  className={`image-container ${isExpanded ? "expanded" : ""}`}
                >
                  <img
                    src="https://via.placeholder.com/1320x2500"
                    alt="Product"
                    className={`product-image ${isExpanded ? "expanded" : ""}`}
                    style={{ backgroundColor: "orange" }}
                  />
                </div>

                <button className="morebtn btn-primary" onClick={toggleExpand}>
                  {isExpanded ? "간략히 보기" : "상품 정보 더 보기"}
                  {isExpanded ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                    >
                      <path
                        d="M1.5 7L7.5 1L13.5 7"
                        stroke="#214AEE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                    >
                      <path
                        d="M1.5 0.999999L7.5 7L13.5 1"
                        stroke="#214AEE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div
                id="review"
                className="section mt-4 col-12"
                style={{ height: "1000px", paddingTop: "50px" }}
              >
                <h3>상품 후기</h3>
                <div className='d-flex align-items-center' style={{gap:'20px'}}>
                  <Bestreview></Bestreview>
                  <Bestreview></Bestreview>
                  <Bestreview></Bestreview>
                </div>
              </div>
              <div
                id="question"
                className="section mt-4 col-12"
                style={{ height: "1000px", paddingTop: "50px" }}
              >
                <h3>상품 문의</h3>
                <p>상품 문의 내용...</p>
              </div>
              <div
                id="purchase"
                className="section mt-4 col-12"
                style={{ height: "1000px", paddingTop: "50px" }}
              >
                <h3>구매 안내</h3>
                <p>구매 안내 내용...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
