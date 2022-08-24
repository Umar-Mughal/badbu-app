import {useRef, useState} from 'react';

import arrowSm from '../../assets/images/arrow-sm.svg';
import earnPerks from '../../assets/images/earn-perks.svg';
import { getClassNames, useWindowResize } from '../../shared';
import PerkSlider from '../Misc/Slider/PerkSlider';
import Card from './Card';
import { StyledActionBar } from './styles';
import SideBarSwiper from './Swiper';

function ActionBar() {
    const { height, width } = useWindowResize();
    const [showEarnPerk, setShowEarnPerk] = useState(false)
    const isShorterScreen = height < 1000;
    const sliderRef = useRef();

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };

    const handlePerkPrice = (perkPriceValue) => {
        if(perkPriceValue < 500){
            handleOnClick(0)
        }
        if(perkPriceValue >= 500 && perkPriceValue <= 2499){
            handleOnClick(0)
        }
        else if(perkPriceValue >= 2500 && perkPriceValue <= 4999){
            handleOnClick(1)
        }
        else if(perkPriceValue >= 5000 && perkPriceValue <= 9999){
            handleOnClick(2)
        }
        else if(perkPriceValue >= 10000 && perkPriceValue <= 24999){
            handleOnClick(3)
        }
        else if(perkPriceValue >= 25000 && perkPriceValue <= 49999){
            handleOnClick(4)
        }
        else if(perkPriceValue >= 50000){
            handleOnClick(5)
        }
    }

    return (
        <StyledActionBar>
            <div className='side-bar-container border w-100 position-sticky my-4 my-md-0'
                 onMouseLeave={() => setShowEarnPerk(false)}
            >
                <div className='earn-perks pe-3' style={{display: width > 767 && showEarnPerk ? 'block': 'none'}}>
                    <div className='core border'>
                        <div className='d-flex justify-content-center align-items-center pb-3'>
                            <img src={earnPerks} alt="earn perks" className='earn-perks-logo' />
                            <span className='d-block ms-3 text-nowrap mt-2'>Earn Perks When you Invest!</span>
                        </div>

                        <div className='py-3 border-top border-bottom d-flex flex-column-reverse' style={{ gap: '16px' }}>
                            <Card
                                title='$50,000+'
                                description='Round Trip Plane Ticket to a Conference'
                                allTheAbove
                                withRed
                                color='yellow'
                            />
                            <Card
                                title='$25,000  -  $49,999'
                                description='Dinner with the Founders and Team'
                                allTheAbove
                                withRed
                                color='grey'
                            />
                            <Card
                                title='$10,000  -  $24,999'
                                description='Admission Ticket to a Conference'
                                allTheAbove
                                withRed
                                color='bronze'
                            />
                            <Card
                                title='$5,000  -  $9,999'
                                description='Limited Edition Budbo NFT (Worldwide)'
                                allTheAbove
                                withRed
                                color='green'
                            />
                            <Card
                                title='$2,500  -  $4,999'
                                description='Budbo Shirt'
                                allTheAbove
                                withRed
                                color='purple'
                            />
                            <Card
                                title='$500  - $2,499'
                                description='Shareholder badge on your Budbo profile'
                                allTheAbove
                                color='red'
                            />
                        </div>
                        <p className='tip pt-2'>
                            <span>*</span>
                            Some perks available to U.S. and Canada Only
                        </p>
                    </div>
                </div>
                <div className={'sidebar__box'}>
                    <div className='top-content rounded-top'
                         onMouseEnter={() => setShowEarnPerk(false)}
                    >
                        <div className='d-flex justify-content-between position-relative'>
                            <ul className={'d-flex flex-column'}>
                                <li className='position-relative'>
                                <span className='title'>
                                    Total Collected
                                </span>
                                    <span className='value text-body'>
                                    $4,204,204
                                </span>
                                    <span className='position-absolute d-none d-mb-block'
                                          style={{ fontSize: '12px', bottom: '-14px', color: 'var(--text-purple)' }}>
                                    Max: $4.99M
                                </span>
                                </li>
                                <li>
                                <span className='title'>
                                    Min. Investment
                                </span>
                                    <span className='value'>
                                    $495
                                </span>
                                </li>
                                <li>
                                <span className='title'>
                                    Shares Offered
                                </span>
                                    <span className='value'>
                                    Common
                                </span>
                                </li>
                            </ul>
                            <ul className={'d-flex flex-column'}>
                                <li>
                                <span className='title'>
                                    No. of Investors
                                </span>
                                    <span className='value'>
                                    5,021
                                </span>
                                </li>
                                <li>
                                <span className='title'>
                                    Price per share
                                </span>
                                    <span className='value'>
                                    $5.50
                                </span>
                                </li>
                                <li>
                                <span className='title'>
                                    Offering Type
                                </span>
                                    <span className='value'>
                                    Equity
                                </span>
                                </li>
                            </ul>

                        </div>
                        <div className='d-block d-md-none'>
                            <div className='border-top border-bottom w-100 text-center my-3 py-1'>
                                <span style={{ fontSize: '12px', opacity: 0.7 }}>Offering Max: $4.99M</span>
                            </div>
                        </div>
                    </div>
                    <div className='hover-trigger'>
                        <div className='d-flex align-items-center mb-3'>
                            <img src={earnPerks} alt="earn perks" className='earn-perks-logo me-2' />
                            <span className='d-none d-md-block'>Investor Perks:</span>
                            <span className='text-colored d-block d-md-none'>Earn Perks When you Invest!</span>
                        </div>
                        <div className='d-flex perkPrices flex-nowrap pin-wrapper justify-content-between justify-content-md-start'
                             style={{ gap: '4px' }}
                             onMouseEnter={() => setShowEarnPerk(true)}
                        >
                            <span className='text-colored border'
                                  onClick={() => handleOnClick(0)}>$500</span>
                            <span className='perkPrices text-colored border'

                                  onClick={() => handleOnClick(1)}>$2.5k
                            </span>
                            <span className='text-colored border'
                                  onClick={() => handleOnClick(2)}
                            >$5k
                            </span>
                            <span className='text-colored border'
                                  onClick={() => handleOnClick(3)}>$10k
                            </span>
                            <span className='text-colored border'
                                  onClick={() => handleOnClick(4)}>$25k</span>
                            <span className='text-colored border'
                                  onClick={() => handleOnClick(5)}>$50k+</span>
                        </div>
                    </div>
                    <div onMouseEnter={() => setShowEarnPerk(false)}>
                        <PerkSlider sliderRef={sliderRef}/>
                    </div>
                    <div className='invest-wrapper'>
                        <p className='tip'><span>*</span>
                            Some perks available to U.S. and Canada
                            <span className='d-none d-xxl-inline-block'>Investors</span> Only</p>
                        <div className='invest d-md-flex justify-content-between align-items-center pt-3 pb-4 pb-md-3'>
                            <div className='d-flex align-items-center'>
                                <div className={getClassNames('invest-title',
                                    isShorterScreen ? 'd-md-flex mb-md-2 w-100 align-items-center' : 'd-block')}>
                                    <span className='d-block text-body'>Invest</span>
                                    <span className={getClassNames('d-block text-colored text-nowrap',
                                        isShorterScreen ? 'ms-md-3' : '')}>Min. $495</span>
                                </div>
                                <div className='input-wrapper d-md-none w-100 ms-3'>
                                    <input type='text'
                                           placeholder='0.00'
                                           className='border px-3'
                                           onChange={e => handlePerkPrice(e.target.value)}
                                    />
                                    <div className='h-100 d-flex justify-content-center align-items-center border position-absolute'>
                                        <span>$</span>
                                    </div>
                                </div>
                            </div>

                            <div className={getClassNames('mt-2 mt-md-0 flex-grow-1', isShorterScreen ? '' : 'ms-md-4')}>
                                <div className='input-wrapper d-none d-md-block w-100'>
                                    <input type='text'
                                           placeholder='0.00'
                                           className='border px-3'
                                           onChange={e => handlePerkPrice(e.target.value)}
                                    />
                                    <div className='h-100 d-flex justify-content-center align-items-center border position-absolute'>
                                        <span>$</span>
                                    </div>
                                </div>
                                {isShorterScreen &&
                                    <a href='#'
                                       className='text-nowrap btn-primary w-100 d-flex align-items-center justify-content-center ms-md-3'>
                                        INVEST
                                        <img src={arrowSm} alt="arrow" className='ms-2' />
                                    </a>}
                            </div>

                        </div>
                        {!isShorterScreen &&
                            <a href='#'
                               className='d-none mt-2 mb-3 text-nowrap btn-primary w-100 d-md-flex align-items-center justify-content-center'>
                                INVEST
                                <img src={arrowSm} alt="arrow" className='ms-2' />
                            </a>}
                    </div>
                    <SideBarSwiper />
                </div>
            </div>
            <div className="d-none d-md-block ghost-container position-absolute">
            </div>
        </StyledActionBar>
    )
}
export default ActionBar;
