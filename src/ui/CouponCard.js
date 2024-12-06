import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import Movetool from "./Mtitle";

const CouponCard = ({
  title,
  description,
  imgSrc,
  buttonText,
  mtitle,
  couponDetails,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // colSize 계산 함수
  const getColSize = (imageCount) => {
    if (!Array.isArray(imgSrc) || imageCount <= 0) return "col-2"; // 기본값 설정
    if (imageCount >= 1 && imageCount <= 3) return "col-4";
    if (imageCount === 4) return "col-2";
    return "col-2"; // 기본값
  };

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <>
      {/* Mtitle이 있을 경우 표시 */}
      {mtitle && (
        <div style={{ paddingTop: "3.125rem", marginBottom: "3.125em" }}>
        <Movetool textColor="#214aee" h2size="34px" nomargin={true}>
          {mtitle.title}
        </Movetool>
        </div>
      )}

      {/* 쿠폰 카드 */}
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-text" style={{ display: "inline-block" }}>
            {description}
          </Card.Text>

          {/* 이미지 및 버튼 그룹 */}
          {Array.isArray(imgSrc) && imgSrc.length > 0 && (
            <Row className="d-flex justify-content-center flex-wrap">
              {imgSrc.map((src, index) => (
                <Col
                  key={index}
                  className={`text-center ${getColSize(imgSrc.length)}`}
                  style={{ marginBottom: "1.25rem" }}
                >
                  <img
                    src={src}
                    alt={`Coupon ${index + 1}`}
                    className="img-fluid w-100"
                  />
                  <Button
                    variant="primary"
                    className="button-common"
                    onClick={openPopup}
                  >
                    {buttonText}
                  </Button>
                </Col>
              ))}
            </Row>
          )}

          {/* 쿠폰 안내 보기 버튼 */}
          <Button
            variant="link"
            onClick={toggleVisibility}
            className={`button-toggle ${isVisible ? "active" : ""}`}
          >
            {isVisible ? "쿠폰 안내 숨기기" : "쿠폰 안내 보기"}
            <i className="bi bi-chevron-right"></i>
          </Button>

          {/* 쿠폰 안내 내용 */}
          {isVisible && Array.isArray(couponDetails) && couponDetails.length > 0 && (
            <div className="box-notice mt-3">
              <hr className="my-3" />
              <div className="box-notice__fence">
                <h5 className="box-notice__title">쿠폰에 대한 안내</h5>
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
          )}
        </Card.Body>
      </Card>

      {/* 팝업 모달 */}
      <Modal show={popupVisible} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">쿠폰 받기 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          쿠폰이 정상적으로 발급되었습니다!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closePopup}
            className="btn-secondary"
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CouponCard;
