import React, { useState, useEffect } from 'react';
import EventCard from '../../ui/EventCard';
import events from '../../db/news/event.json';
import { Pagination } from 'react-bootstrap';
import './Event.scss';

const Event = () => {
  const [eventList, setEventList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  useEffect(() => {
    setEventList(events);
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventList.slice(indexOfFirstEvent, indexOfLastEvent);

  // const totalPages = Math.ceil(eventList.length / eventsPerPage);
  const totalPages = Math.max(5, Math.ceil(eventList.length / eventsPerPage));


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2 className="categorytitle">이벤트</h2>
      <div className="row gx-5">
        {currentEvents.map((event) => (
          <EventCard
            key={event.id}
            imgSrc={`/assets/img/event/event_card_0${event.imgNumber}.jpg`}
            title={event.title}
            period={event.period}
            isExpired={event.isExpired}
          />
        ))}
      </div>

      <div className="pagination d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index}
              onClick={() => paginate(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Event;
