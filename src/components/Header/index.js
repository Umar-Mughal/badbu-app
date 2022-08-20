import { useEffect, useState } from 'react';

import headerLogo from '../../assets/images/header-logo.svg';
import headerLogoMob from '../../assets/images/header-logo-mob.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail-icon.svg';
import { ReactComponent as OfferIcon } from '../../assets/images/offer-icon.svg';
import { ReactComponent as TelIcon } from '../../assets/images/tel-icon.svg';
import { getClassNames, mockSocialLinks, useMobileMode } from '../../shared';
import { StyledHeader } from './styles';
import { mockHeaderLinks } from './constants';

function Header({ currentLink }) {
    const isMobileMode = useMobileMode();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    // const [currentSection, setCurrentSection] = useState(window.location.hash.substring(1));
    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    }, [isMobileOpen]);

    const socialLinks = (
        <div className="my-4 my-lg-5 my-xl-0 social-links d-flex justify-content-center justify-content-md-start">
            {mockSocialLinks.map((item, index) => (
                <a href={item.link} key={index}>
                    {item.icon}
                </a>
            ))}
        </div>
    )

    const leftList = (
        <ul className='left-list ms-xl-4 d-flex justify-content-center justify-content-xl-between
        align-items-center col-5 col-md-4
         flex-wrap flex-xl-nowrap text-center text-lg-start'>
            <a href="mailto:investors@budbo.com" className='d-flex align-items-center mb-2 mb-xl-0'>
                <MailIcon className='me-2' />
                <span className='text-colored'>
                    investors@budbo.com
                </span>
            </a>
            <a href="tel:305-94-BUDBO" className='d-flex align-items-center mb-2 mb-xl-0'>
                <TelIcon className='mx-2' />
                <span className='text-colored text-nowrap'>
                    305-94-BUDBO
                </span>
            </a>
            <a href="#" className='d-flex align-items-center'>
                <OfferIcon className='me-2' />
                <span className='text-colored text-nowrap '>
                    View offering circular
                </span>
            </a>

        </ul>
    )

    const rightList = (
        <ul className='right-list mt-md-4 mt-xl-0 d-flex justify-content-center justify-content-lg-end
         flex-wrap flex-xl-nowrap align-items-center col-10 col-xl-7'>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored'>MIN. INVESTMENT</span>
                <span className='d-block d-lg-inline-block ms-lg-2 fw-bold'>$495</span>
            </li>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored'>RAISED</span>
                <span className='d-block d-lg-inline-block ms-lg-2 fw-bold'>$4,204,204</span>
            </li>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored'>COMPLETE</span>
                <span className='d-block d-lg-inline-block ms-lg-2 fw-bold'>84.4%</span>
                <div className='progress ms-4 d-none d-xl-block'>
                    <div />
                </div>
            </li>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored'>SHARE PRICE</span>
                <span className='d-block d-lg-inline-block ms-lg-2 fw-bold'>$5.50</span>
            </li>
        </ul>
    )


    return (
        <StyledHeader className='w-100 d-block bg-white overflow-hidden'>
            <div className='header-top d-none d-xl-flex justify-content-between align-items-center w-100 px-3 
            px-xxl-4 py-2 py-xxl-3'>
                {socialLinks}
                <div className="flex-grow-1 ms-1 ms-xxl-3 d-flex align-items-center justify-content-between">
                    {leftList}
                    {rightList}
                </div>
            </div>
            <div className='header-bottom bg-white d-flex justify-content-between align-items-center w-100 px-3
             px-xxl-4 py-2 py-xxl-3 border-top'>
                <img src={isMobileMode ? headerLogoMob : headerLogo} alt="header-logo"
                    className='me-2 me-md-0 cursor-pointer'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }} />
                <div className='flex-grow-1 d-none d-xl-flex justify-content-between align-items-center'>
                    {mockHeaderLinks.map((item, index) => (
                        <a href={item.href} key={index} className={getClassNames('text-colored text-nowrap',
                            item.href.substring(1) === currentLink ? 'active' : '')}>
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className={getClassNames('d-flex align-items-center', isMobileMode ? 'flex-grow-1 mobile' : '')}>
                    <a href="#" className="btn flex-grow-1">
                        Invest now
                    </a>
                    <div className={getClassNames('hamburger d-flex align-items-center justify-content-end ' +
                        'd-xl-none ms-3 cursor-pointer',
                        isMobileOpen ? 'active' : '')}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}>
                        <span className='hamburger-line w-100' />
                        <span className='hamburger-line w-75' />
                        <span className='hamburger-line w-100' />
                    </div>
                </div>
            </div>



            <div className={getClassNames('header-mobile-menu d-flex d-xl-none flex-column align-items-center ' +
                ' justify-content-start justify-content-md-center position-fixed bg-white overflow-hidden h-100',
                isMobileOpen ? 'active' : '')}>


                {mockHeaderLinks.map((item, index) => (
                    <a href={item.href} key={index} className={getClassNames('text-colored mb-3',
                        item.href.substring(1) === currentLink ? 'active' : '')}
                        onClick={() => {
                            setIsMobileOpen(false)
                        }}>
                        {item.title}
                    </a>
                ))}

                {rightList}
                {socialLinks}
                {leftList}

            </div>
        </StyledHeader>
    );
}

export default Header;