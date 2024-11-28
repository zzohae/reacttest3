import React from 'react';

const EventCard = ({ imgSrc, title, period, isExpired }) => {
  return (
    <div className="col-6 col-lg-4 mb-4 d-flex flex-column">

        <img src={imgSrc} alt={title} className="event-img" />
        <h3>{title}</h3>
        <p>{period}</p>
        {isExpired && <span className="expired-badge">종료됨</span>}
    </div>
  );
}

export default EventCard;
