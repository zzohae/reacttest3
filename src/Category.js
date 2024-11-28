import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import productData from './db/product.json';
import Product from './ui/Product';
import allcategory from './db/allData.json';

export default function Category({ keyword, incartNum, setIncartNum }) {
  const { cn } = useParams();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keywordFromUrl = queryParams.get('keyword');
    setSearchKeyword(keywordFromUrl || keyword);
  }, [location.search, keyword]);

  useEffect(() => {
    setFilteredProducts(
      productData.filter((product) => {
        const matchesCategory = cn ? product.category === cn : true;
        const matchesKeyword = searchKeyword
          ? product.prodName.toLowerCase().includes(searchKeyword.toLowerCase())
          : true;

        return matchesCategory && matchesKeyword;
      })
    );
  }, [searchKeyword, cn]);

  const getCategoryTitle = (cn) => {
    return (
      allcategory?.navdata?.category?.submenu?.find((v) => v.linkto === cn)
        ?.title || '전체 상품'
    );
  };

  const getSearchTitle = (keyword) => {
    if (keyword) {
      return `'${keyword}'의 검색결과`;
    }
    return getCategoryTitle(cn);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container">
        <h2 className="categorytitle">{getSearchTitle(searchKeyword)}</h2>

        <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start mytab">
          <li className={`d-flex justify-content-center align-items-center ${!cn ? 'active' : ''}`}>
            <Link to="/products">전체 상품</Link>
          </li>
          {allcategory.navdata.category.submenu.map((v) => (
            <li
              key={v.linkto}
              className={`d-flex justify-content-center align-items-center ${cn === v.linkto ? 'active' : ''}`}
            >
              <Link to={`/products/${v.linkto}`}>{v.title}</Link>
            </li>
          ))}
        </ul>

        <p className="totalQuan">총 {filteredProducts.length}건</p>
        <div className="row align-items-center">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              rowclass="col-6 col-lg-4 col-xl-3"
              prdId={product.id}
              img={`/assets/img/product/${product.img}.jpg`}
              prodName={product.prodName}
              store={product.store}
              originprice={product.originprice}
              saleprice={product.saleprice}
              promobadge={product.promobadge}
              incartNum={incartNum}
              setIncartNum={setIncartNum}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
