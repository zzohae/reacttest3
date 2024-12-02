import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Event from './Event';
import Notice from './Notice';
import LocalEvent from './LocalEvent';
import CardNews from './CardNews';
import allcategory from '../../db/allData.json';

export default function News() {
  const { en } = useParams();  // URL 파라미터에서 'en' 값을 추출

  const submenu = allcategory.navdata.promotionmenu.find(
    (menu) => menu.linkto === "news/notice"
  ).submenu;

  // en 값에 맞는 컴포넌트를 반환하는 함수
  const getComponent = (en) => {
    switch (en) {
      case 'notice':
        return <Notice />;
      case 'online_event':
        return <Event />;
      case 'offline_event':
        return <LocalEvent />;
      case 'cardnews':
        return <CardNews />;
      default:
        return <Notice />;
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start mytab">
        {submenu.map((v, i) => (
          <li className={`d-flex justify-content-center align-items-center ${en === `${v.linkto}` ? 'active' : ''}`} key={i}>
            <Link to={`/news/${v.linkto}`}>{v.title}</Link>
          </li>
        ))}
      </ul>
      <div className="content">
        {getComponent(en)}  {/* en 값에 맞는 컴포넌트를 렌더링 */}
      </div>
    </div>
  );
}
