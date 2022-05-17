import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import nftgif from '../assets/img/nft.gif';

const Nft = () => {
    return (
        <div className="bgImg nft__section" id="nft__section">
            <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <Row className="w-100 justify-content-center my-5">
                    <Col xs="8" className="text-center">
                        <h2>Enjoy</h2>
                        <p>YieldBox NFT Collection</p>
                    </Col>
                </Row>

                <Row className=" mt-4 align-items-center">
                    <Col md="8">
                        <ul className="nft__list">
                            <li>Own exclusive NFT collections that uniquely interact with the ecosystem.</li>
                            <li>There are 4 rarities of NFT with different reward rate for owners: Common, Rare, Epic, Immortal.</li>
                            <li>Trade it on our Marketplace OR own it to earn passive income and particiate in our WallStreet Social Game.</li>
                        </ul>
                        <Row>
                            <Col sm="6" md="6" lg="4">
                                <Link to="" className="btn btn-block btn__learn w-100">Learn More</Link>
                            </Col>
                            <Col sm="6" md="6" lg="4">
                                <Link to="" className="btn btn-block btn__collection w-100">NFT Collection</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <img src={nftgif} className="img-responsive" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Nft;
