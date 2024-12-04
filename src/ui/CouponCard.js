import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Mtitle from "./Mtitle";

const CouponCard = ({ title, description, imgSrc, link, buttonText, mtitle, couponDetails }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getColClass = (count) =>
    count === 1 ? "col-12" : count === 2 ? "col-6" : count === 3 ? "col-4" : "col-12";

  return (
    <>
      {mtitle ? (
        <div style={{ padding: "50px 0" }}>
          <Mtitle textColor="#214AEE">
            {mtitle.title}
          </Mtitle>
        </div>
      ) : null}

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="fw-bold text-truncate">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>

          <Row>
            {imgSrc.map((src, index) => (
              <Col key={index} className={getColClass(imgSrc.length)}>
                <img src={src} alt={`Coupon ${index + 1}`} className="img-fluid" />
                <Button
                  variant="primary"
                  href={link}
                  className="w-100 mt-2"
                  style={{ backgroundColor: "#214AEE", borderColor: "#214AEE" }}
                >
                  {buttonText}
                </Button>
              </Col>
            ))}
          </Row>

          <Button
            variant="link"
            onClick={() => setIsVisible(!isVisible)}
            className="p-0 text-decoration-none"
          >
            {isVisible ? "쿠폰 안내 숨기기" : "쿠폰 안내 보기"}
          </Button>

          {isVisible ? (
            <div className="box-notice mt-3">
              <div className="box-notice__fence">
                <h5 className="box-notice__title">쿠폰에 대한 안내</h5>
                <div className="box-notice__content">
                  <ul className="list-bullet">
                    {couponDetails.map((item, index) => (
                      <li className="list-bullet__item" key={index}>
                        <span className="title">{item.title}</span>
                        <span className="data">{item.data}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default CouponCard;
