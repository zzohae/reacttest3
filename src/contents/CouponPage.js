import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CouponCard from "../ui/CouponCard";
import couponData from "../db/couponData.json";
import './Coupon.scss';


const CouponPage = () => {
  const couponDataList = couponData.navdata.promotionmenu.find(
    (menu) => menu.linkto === "/ecoupon"
  )?.submenu || [];

  return (
    <Container style={{ paddingBottom: "50px" }}>
      <Row>
        {couponDataList.map((coupon, index) => (
          <Col key={index} xs={12} md={12} lg={12}>
            <CouponCard {...coupon} colSize="col-4" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CouponPage;
