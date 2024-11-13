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
        <div className="row w-100">
          <h2 className="categorytitle">
            {allcategory?.navdata?.category?.submenu?.find(
              (v) => v.linkto === cn
            )?.title || "전체 상품"}
          </h2>
          <ul className="d-flex mytab mb-4 pb-3">
            <li>
              <Link to="/products" className={cn ? "" : "active"}>
                전체 상품
              </Link>
            </li>
            {allcategory.navdata["category"]["submenu"].map((v, i) => {
              return (
                <li>
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
          <div className="row align-items-center">
            {filteredProducts.map((v, i) => {
              return (
                <Product
                  key={v.id}
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
    </div>
  );
}
