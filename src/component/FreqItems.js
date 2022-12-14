import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import "../css/item.css";
import BasketIcon from "../assets/items/basket_icon.svg";

import { Navigation } from "swiper";

export default function Item(props) {
    const navigate = useNavigate();

    return (
        <RecommendItem>
            <div className="recommend_items">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        clickable: true,
                        nextEl: ".swiper-freq-button-next",
                        prevEl: ".swiper-freq-button-prev",
                    }}
                    modules={[Navigation]}
                    className="swiper-container"
                >
                    <div className="swiper-wrapper">
                        {props.dummy.length > 0 &&
                            props.dummy.map((item, idx) => (
                                <SwiperSlide key={item.id}>
                                    <ItemContainer>
                                        <ItemImg1
                                            src={item.src}
                                            alt={item.alt}
                                            onClick={() => {
                                                navigate(`/Detail/${item.id}`);
                                            }}
                                        />
                                        <AddBasket>
                                            <img
                                                src={BasketIcon}
                                                alt="장바구니 추가"
                                                onClick={() => {
                                                    alert("장바구니");
                                                }}
                                            />
                                        </AddBasket>
                                    </ItemContainer>
                                    <ItemInfo>
                                        <ItemName>{item.title}</ItemName>
                                        <InfoDetail>
                                            <ProductPrice>
                                                <Discount>
                                                    {item.discount}
                                                </Discount>
                                                <SalePrice>
                                                    {parseInt(
                                                        item.sale_price
                                                    ).toLocaleString()}
                                                    원
                                                </SalePrice>
                                            </ProductPrice>
                                        </InfoDetail>
                                    </ItemInfo>
                                </SwiperSlide>
                            ))}
                    </div>
                </Swiper>
                <button className="swiper-freq-button-next"></button>
                <button className="swiper-freq-button-prev"></button>
            </div>
        </RecommendItem>
    );
}
const RecommendItem = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding-bottom: 40px;
`;
const ItemContainer = styled.div`
    display: flex;
    position: relative;
    width: 249px;
    height: 320px;
`;
const ItemImg1 = styled.img`
    height: 320px;
    width: 249px;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        transition: 0.3s;
    }
`;

const AddBasket = styled.button`
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const ItemInfo = styled.div`
    position: relative;
    width: 249px;
    padding: 14px 10px 0px 0px;
    margin-bottom: 8px;
`;
const InfoDetail = styled.div`
    display: flex;
    margin-top: 5px;
`;
const ProductPrice = styled.div`
    display: flex;
`;
const Discount = styled.span`
    color: red;
    margin-right: 4px;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`;
const SalePrice = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`;
const ItemName = styled.h3`
    font-size: 16px;
    line-height: 1.45;
    font-weight: 400;
`;
