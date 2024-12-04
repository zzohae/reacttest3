import React from 'react';
import { Link, useParams } from 'react-router-dom';
import OnlineEvent from './Event';
import Notice from './Notice';
import LocalEvent from './LocalEvent';
import CardNews from './CardNews'
import allcategory from '../../db/allData.json';

export default function News() {
  const { en } = useParams();

  const submenu = allcategory.navdata.promotionmenu.find(
    (menu) => menu.linkto === "news/notice"
  ).submenu;

  const getComponent = (en) => {
    switch (en) {
      case 'notice':
        return <Notice />;
      case 'online_event':
        return <OnlineEvent />;
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
      <div className='container mycontainer'>

        <div className='mybanner'>
          <img
            src="/assets/img/banner/sub_banner_02.jpg"
            alt="배너 이미지"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>


        <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start mytab">
          {submenu.map((v, i) => (
            <li className={`d-flex justify-content-center align-items-center ${en === `${v.linkto}` ? 'active' : ''}`} key={i}>
              <Link to={`/news/${v.linkto}`}>{v.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          {getComponent(en)}
        </div>
      </div>
    </div>
  );
}
