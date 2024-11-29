import React, { useEffect, useState } from 'react';
import EventCard from '../../ui/EventCard';  // EventCard 컴포넌트
import events from '../../db/news/event.json';  // 이벤트 데이터
import Movetool from '../../ui/Mtitle'

const Event = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(events);
  }, []);

  return (
    <div>
      <Movetool textColor='#214aee' h2size='34px'>온라인 이벤트</Movetool>
      <div className="row gx-5 mt50">
        {eventList.map((event) => (
          <EventCard
            key={event.id}
            imgSrc={`/assets/img/event/event_card_0${event.imgNumber}.jpg`}
            title={event.title}
            period={event.period}
            isExpired={event.isExpired}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
