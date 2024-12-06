import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import Movetool from "./Mtitle";

const CouponImage = ({ imgSrc }) => (
  <Row className="g-3">
    {imgSrc.map((img, index) => (
      <Col key={index} xs={6}>
        <Card className="shadow-sm">
          <Card.Img src={img.src} alt={img.alt} className="img-fluid" />
        </Card>
      </Col>
    ))}
  </Row>
);

const ProbabilityCard = ({ isVisible, toggleVisibility, probabilityData }) => (
  <Col
    md={3}
    className="d-flex flex-column justify-content-center"
    style={{ minHeight: isVisible ? "200px" : "50px" }}
  >
    <Card
      className="p-3 d-flex justify-content-center"
      style={{
        border: "2px solid #214aee",
        borderRadius: "5px",
        height: isVisible ? "100%" : "20%",
        padding: isVisible ? "20px" : "10px",
      }}
    >
      <Button
        variant="link"
        onClick={toggleVisibility}
        className={`button-toggle ${isVisible ? "active" : ""}`}
        style={{ color: "#214aee", fontWeight: "bold" }}
      >
        {isVisible ? "랜덤확률표" : "랜덤확률표"}
        <i className="bi bi-chevron-right"></i>
      </Button>

      {isVisible && (
        <ul className="custom-list mt-3">
          {probabilityData.map((probability, index) => (
            <li key={index}>
              {/* Render text and percentage separately */}
              <span>{probability.text}: {probability.percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  </Col>
);


const CouponImageWithButton = ({ buttonText, openPopup }) => (
  <Col md={3} className="d-flex flex-column align-items-center justify-content-center">
    <img
      src="/assets/img/coupon/randombox.jpg"
      alt="Image"
      className="img-fluid rounded"
    />
    <Button variant="primary" onClick={openPopup} className="button-common">{buttonText}</Button>
  </Col>
);

const RandomCoupon = ({
  mtitle,
  title,
  description,
  imgSrc,
  probabilityData,
  buttonText,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageAlt, setModalImageAlt] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // 랜덤 이미지 alt 값을 선택하는 함수
  const getRandomImageAlt = () => imgSrc[Math.floor(Math.random() * imgSrc.length)].alt;

  // 모달 열기
  const openPopup = () => {
    setModalImageAlt(getRandomImageAlt());
    setShowModal(true);
  };

  // 랜덤 확률표 토글 함수
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="random-coupon-container">
      {/* Movetool */}
      {mtitle && (
        <div style={{ paddingTop: "3.125rem", marginBottom: "3.125rem" }}>
          <Movetool textColor="#214aee" h2size="34px" nomargin>
            {title}
          </Movetool>
        </div>
      )}

      <Card className="shadow-sm p-3 mb-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ display: "inline-block" }}>{description}</Card.Text>

          <Row className="justify-content-center d-flex align-items-stretch">
            <Col md={3}>
              <CouponImage imgSrc={imgSrc} />
            </Col>

            <ProbabilityCard
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
              probabilityData={probabilityData}
            />

            <CouponImageWithButton buttonText={buttonText} openPopup={openPopup} />
          </Row>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <p>{modalImageAlt}이(가) 정상적으로 발급되었습니다!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RandomCoupon;
