import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import Mtitle from "./Mtitle";

const CouponCard = ({
  title,
  description,
  imgSrc,
  buttonText,
  mtitle,
  couponDetails,
  colSize = "col-3",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleCouponClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {mtitle ? (
        <div style={{ padding: "50px 0" }}>
          <Mtitle textColor="#214AEE">{mtitle.title}</Mtitle>
        </div>
      ) : null}

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="fw-bold text-truncate">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>

          {/* 중앙 정렬 */}
          <Row className="d-flex justify-content-center flex-wrap">
            {imgSrc.map((src, index) => (
              <Col key={index} className={`text-center ${colSize}`}>
                <img
                  src={src}
                  alt={`Coupon ${index + 1}`}
                  className="img-fluid w-100"
                  style={{
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #214AEE",
                    color: "#333"
                  }}
                  onClick={handleCouponClick}
                >
                  {buttonText}
                </Button>
              </Col>
            ))}
          </Row>

          {/* 쿠폰 안내 보기 버튼 */}
          <Button
            variant="link"
            onClick={() => setIsVisible(!isVisible)}
            className="p-0 text-decoration-none mt-3"
            style={{
              color: isVisible ? "#333" : "#666",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isVisible ? "쿠폰 안내 숨기기" : "쿠폰 안내 보기"}
            <i
              className="bi bi-chevron-right"
              style={{
                color: '#214AEE',
                marginLeft: '8px',
                fontSize: '1rem',
              }}
            ></i>
          </Button>


          <div className="box-notice mt-3">
            {isVisible && (
              <>
                <hr className="my-3" />
                <div className="box-notice__fence">
                  <h5 className="box-notice__title mb-2">쿠폰에 대한 안내</h5>
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
              </>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={popupVisible} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>쿠폰 받기 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body>쿠폰이 정상적으로 발급되었습니다!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClosePopup}
            style={{ backgroundColor: "#214aee", color: "#fff" }}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CouponCard;
