import arrowSm from '../../assets/images/arrow-sm.svg';
import logo from '../../assets/images/logo.svg';
import { StyledFooter } from './style';

function Footer() {

    return (
        <StyledFooter>
            <div
                className="container d-flex flex-column
                flex-xl-row align-items-center text-center"
            >
                <div className={'footer_box_1 d-flex align-items-center'}>
                    <img src={logo} alt="logo" className="d-block mb-4 mb-xl-0"/>
                    <div className="d-none d-md-block border-wrapper position-relative w-100 flex-grow-1">
                        <a
                            href={'#'}
                            className="btn btn-primary py-3 fw-bold col-10 mx-auto
                        col-md-6 col-xxl-9 mt-4 mt-xl-0 text-nowrap">Invest now<img src={arrowSm} alt="arrow"
                                                                                    className="ms-1"/>
                        </a>
                    </div>
                </div>
                <div className={'footer_box_2'}>
                    <p className="text-colored d-block footer__text">Invest in Budding Technologies, Inc. and together we will
                        pioneer the future!
                    </p>
                    <div className="d-md-none d-block border-wrapper position-relative w-100 flex-grow-1">
                        <a
                            href={'#'}
                            className="btn btn-primary py-3 fw-bold col-10 mx-auto
                        col-md-6 col-xxl-9 mt-4 mt-xl-0 text-nowrap">Invest now<img src={arrowSm} alt="arrow"
                                                                                    className="ms-1"/>
                        </a>
                        <p className="border_footer"/>
                    </div>
                </div>
            </div>



            {/*<div className="container">*/}
            {/*    <div className="mx-auto">*/}
            {/*        <div className="top-footer d-xl-flex justify-content-between align-items-center border-bottom">*/}
            {/*            <div className="top-footer__left d-md-flex align-items-center justify-content-center */}
            {/*        mb-md-4 mb-xl-0">*/}
            {/*                <a href="#" className='me-3 d-block d-md-inline-block text-center text-xl-start'>*/}
            {/*                    <img src={logo} alt="logo" />*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <a href={'#'} className='btn btn-primary'>*/}
            {/*                Invest Now*/}
            {/*                <img src={arrowSm} alt='arrow' className='ms-1' />*/}
            {/*            </a>*/}
            {/*            <div className="top-footer__right d-md-flex align-items-center justify-content-center">*/}
            {/*                <p className='text-colored mb-4 mb-md-0 me-md-4 text-center text-lg-start'>*/}
            {/*                    Invest in Budding Technologies, Inc. and together we will pioneer the future!*/}
            {/*                </p>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </StyledFooter>
    )
}

export default Footer
