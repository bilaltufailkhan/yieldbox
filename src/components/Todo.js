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
          <Col xs="12">
            <span className="todo__pill py-3 px-5">Website</span>
            <span className="todo__pill py-3 px-5 mx-3">Dashboard V1</span>
            <span className="todo__pill py-3 px-5 mx-3">Whitepaper</span>
            <span className="todo__pill py-3 px-5 mx-3">InterFi Audit</span>
            <span className="todo__pill py-3 px-5 mx-3">Certik Audit</span>
            <span className="todo__pill py-3 px-5 mx-3">Prelaunch Marketing</span>
            <span className="todo__pill py-3 px-5 mx-3">Shilling Competition</span>
            <span className="todo__pill py-3 px-5 mx-3">AirDrop</span>
            <span className="todo__pill py-3 px-5 mx-3">Fair Pre-sale on PinkSale</span>
            <span className="todo__pill py-3 px-5 mx-3">Liquidity Lock 6 months</span>
            <span className="todo__pill py-3 px-5 mx-3">YieldBox Launch</span>
            <span className="todo__pill py-3 px-5 mx-3">CoinMarket Cap Listing</span>
            <span className="todo__pill py-3 px-5 mx-3">CoinGecko Listing</span>
            <span className="todo__pill py-3 px-5 mx-3">Crypto.com Listing</span>
            <span className="todo__pill py-3 px-5 mx-3">Bsc Scan {"&"} Trust Wallet Update</span>
            <span className="todo__pill py-3 px-5 mx-3">Twitter Marketing</span>
            <span className="todo__pill py-3 px-5 mx-3">YouTube Marketing</span>
            <span className="todo__pill py-3 px-5 mx-3">TikTok Marketing</span>
            <span className="todo__pill py-3 px-5 mx-3">CMS {"&"} DexTools trending</span>
            <span className="todo__pill py-3 px-5 mx-3">AirDrop for Holders</span>
            <span className="todo__pill py-3 px-5 mx-3">YieldBox  Swap Development</span>
            <span className="todo__pill py-3 px-5 mx-3">NFT Marketplace Development</span>
            <span className="todo__pill py-3 px-5 mx-3">Staking Development</span>
            <span className="todo__pill py-3 px-5 mx-3">Auto Reinvestment Pool Development</span>
            <span className="todo__pill py-3 px-5 mx-3">Cross-Chain Integration</span>
            <span className="todo__pill py-3 px-5 mx-3">Dashboard V2 Development</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
