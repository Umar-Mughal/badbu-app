import React from 'react';
import Slider from 'react-slick';

import Card from '../ActionBar/Card';
import {PerkSliderStyle} from './PerkSliderStyle';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PerkSlider() {
    var settings = {
        // dots: true,
        // infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 2,
        adaptiveHeight: true
    };
    return (
        <PerkSliderStyle>
            <Slider {...settings}>
                <Card
                    title='$500  - $2,499'
                    description='Shareholder badge on your Budbo profile'
                    color='red'
                />
                <Card
                    title='$2,500  -  $4,999'
                    description='Budbo Shirt'
                    allTheAbove
                    withRed
                    color='purple'
                />

                <Card
                    title='$5,000  -  $9,999'
                    description='Limited Edition Budbo NFT (Worldwide)'
                    allTheAbove
                    withRed
                    color='green'
                />
                <Card
                    title='$10,000  -  $24,999'
                    description='Admission Ticket to a Conference'
                    allTheAbove
                    withRed
                    color='bronze'
                />
                <Card
                    title='$25,000  -  $49,999'
                    description='Dinner with the Founders and Team'
                    allTheAbove
                    withRed
                    color='grey'
                />
                <Card
                    title='$50,000+'
                    description='Round Trip Plane Ticket to a Conference'
                    allTheAbove
                    withRed
                    color='yellow'
                />
            </Slider>
        </PerkSliderStyle>
    );
}