import React from 'react';

const EventCard = ({ imgSrc, title, period, isExpired }) => {
  return (
    <div className="col-6 col-lg-4 d-flex flex-column">

      <img src={imgSrc} alt={title} className="event-img"/>
      <div className='event-row d-flex'>
        <h2 className='fs-h4'>{title}</h2>
        <p className='fs-h4'>{period}</p>
        {isExpired && <span className="fs-h4">종료됨</span>}
      </div>
    </div>
  );
}

export default EventCard;
