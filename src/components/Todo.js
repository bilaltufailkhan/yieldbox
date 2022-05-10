import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Todo = () => {
  return (
    <div className="todo__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3">
          <Col xs="12" className="todo__content">
            <h2>Todo</h2>
          </Col>
        </Row>
        <Row className="my-3 pills__list">
          {/* <Col xs="12"> */}
          <span className="todo__pill py-3 px-5">Website</span>
          <span className="todo__pill py-3 px-5">Dashboard V1</span>
          <span className="todo__pill py-3 px-5">Whitepaper</span>
          <span className="todo__pill py-3 px-5">InterFi Audit</span>
          <span className="todo__pill py-3 px-5">Certik Audit</span>
          <span className="todo__pill py-3 px-5">Prelaunch Marketing</span>
          <span className="todo__pill py-3 px-5">Shilling Competition</span>
          <span className="todo__pill py-3 px-5">AirDrop</span>
          <span className="todo__pill py-3 px-5">Fair Pre-sale on PinkSale</span>
          <span className="todo__pill py-3 px-5">Liquidity Lock 6 months</span>
          <span className="todo__pill py-3 px-5">YieldBox Launch</span>
          <span className="todo__pill py-3 px-5">CoinMarket Cap Listing</span>
          <span className="todo__pill py-3 px-5">CoinGecko Listing</span>
          <span className="todo__pill py-3 px-5">Crypto.com Listing</span>
          <span className="todo__pill py-3 px-5">Bsc Scan {"&"} Trust Wallet Update</span>
          <span className="todo__pill py-3 px-5">Twitter Marketing</span>
          <span className="todo__pill py-3 px-5">YouTube Marketing</span>
          <span className="todo__pill py-3 px-5">TikTok Marketing</span>
          <span className="todo__pill py-3 px-5">CMS {"&"} DexTools trending</span>
          <span className="todo__pill py-3 px-5">AirDrop for Holders</span>
          <span className="todo__pill py-3 px-5">YieldBox  Swap Development</span>
          <span className="todo__pill py-3 px-5">NFT Marketplace Development</span>
          <span className="todo__pill py-3 px-5">Staking Development</span>
          <span className="todo__pill py-3 px-5">Auto Reinvestment Pool Development</span>
          <span className="todo__pill py-3 px-5">Cross-Chain Integration</span>
          <span className="todo__pill py-3 px-5">Dashboard V2 Development</span>
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
