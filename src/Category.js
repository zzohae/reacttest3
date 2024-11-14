import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./db/products.json";
import Product from "./ui/Product";
import allcategory from "./db/allData.json";

export default function Category() {
  const { cn } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      cn
        ? productData.filter((product) => product.category === cn)
        : productData
    );
  }, [cn]);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container">
        <div className=" ">
          <h2 className="categorytitle">
            {allcategory?.navdata?.category?.submenu?.find(
              (v) => v.linkto === cn
            )?.title || "전체 상품"}
          </h2>
          <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start mytab">
            <li>
              <Link to="/products" className={cn ? "" : "active"}>
                전체 상품
              </Link>
            </li>
            {allcategory.navdata["category"]["submenu"].map((v, i) => {
              return (
                <li className="d-flex">
                  <Link
                    to={`/products/${v.linkto}`}
                    key={i}
                    className={cn === `${v.linkto}` ? "active" : ""}
                  >
                    {v.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="totalQuan">총 {filteredProducts.length}건</p>
          </div>
          <div className="row align-items-center">
            {filteredProducts.map((v, i) => {
              return (
                <Product
                  prdId={v.id}
                  img={v.img}
                  prodName={v.prodName}
                  store={v.store}
                  originprice={v.originprice}
                  saleprice={v.saleprice}
                />
              );
            })}
          </div>
        
      </div>
    </div>
  );
}
