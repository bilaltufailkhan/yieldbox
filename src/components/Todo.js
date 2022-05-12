import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



const Todo = () => {
  const listData = [
    { name: 'Website' },
    { name: 'Dashboard V1' },
    { name: 'Whitepaper' },
    { name: 'InterFi Audit' },
    { name: 'CertiK Audit' },
    { name: 'Pre-Launch Marketing' },
    { name: 'Shilling Competition' },
    { name: 'Air Drop' },
    { name: 'Fair Pre-sale on PinkSale' },
    { name: 'Liquidity Lock 6 Months' },
    { name: 'YieldBox Launch' },
    { name: 'CoinMarketCap Listing' },
    { name: 'CoinGecko Listing' },
    { name: 'Crypto.com Listing' },
    { name: 'BSC Scan and Trust Wallet Update' },
    { name: 'Twitter Marketing' },
    { name: 'YouTube Marketing' },
    { name: 'TikTok Marketing' },
    { name: 'CMC & DexTools Trending' },
    { name: 'AirDrop for Holders' },
    { name: 'YieldBox Swap Development' },
    { name: 'NFT Marketplace Development' },
    { name: 'Staking Development' },
    { name: 'Autoreinvestment Pool Development' },
    { name: 'Cross-chain Integration' },
    { name: 'Dashboard V2 Development' },
  ];
  const listData2 = [
    { name: '2000 holders' },
    { name: '5000 holders' },
    { name: '10000 holders' },
    { name: '15000 holders' },
    { name: '20000 holders' },
    { name: '25000 holders' },
    { name: '50000 holders' },
    { name: '100000 holders' },
    { name: '5m MCap' },
    { name: '10m MCap' },
    { name: '25m MCap' },
    { name: '50m MCap' },
    { name: '100m MCap' }
  ];

  const listData3 = [
    { name: 'Official Merch Shop' },
    {
      name: 'YieldBox Event'
    }
  ]
  return (
    <div className="todo__section" id="todo__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3">
          <Col xs="12" className="todo__content">
            <h2>Todo</h2>
          </Col>
        </Row>
        <Row className="my-3 w-100">
          <Col xs="12" className="my-2">
            <h4 className="text-center">General</h4>
            <div className="pills__list">
              {
                listData.map(data => (
                  <span className="todo__pill py-3 px-5">{data.name}</span>
                ))

              }
            </div>
          </Col>
          <Col xs="12" className="my-2">
            <h4 className="text-center">Others</h4>
            <div className="pills__list">
              {
                listData2.map(data => (
                  <span className="todo__pill py-3 px-5">{data.name}</span>
                ))

              }
            </div>
          </Col>
          <Col xs="12" className="my-2">
            <h4 className="text-center">At the End</h4>
            <div className="pills__list">
              {
                listData3.map(data => (
                  <span className="todo__pill py-3 px-5">{data.name}</span>
                ))

              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
