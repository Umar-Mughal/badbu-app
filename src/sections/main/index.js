import { useEffect } from 'react';
import Lottie from 'lottie-web';

import arrowSm from '../../assets/images/arrow-sm.svg';
import mainAnimation from './main-animation.json';
import { StyledMain } from './styles'

function Main() {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#background'),
            animationData: mainAnimation,
        });
    }, []);

    return (
        <StyledMain className='d-flex justify-content-center align-items-center'>
            <div className="container h-100 position-relative">
                <h1 className='fw-bold'>
                    <span className="d-block slogan">Cannabis Meets Blockchain.</span>
                    You Meet a Future-Proof <br className='d-none d-md-block' /> Investment Opportunity
                </h1>
                <p className='my-5'>
                    Budding Technologies, Inc. puts cannabis on blockchain,
                    merging two booming industries into one revolutionary business model.
                    This is your chance to invest in your future. Save your front row seat to the birth of an icon.
                </p>

                <button className="btn btn-primary fw-bold">
                    Invest now
                    <img src={arrowSm} alt='arrow' className='ms-1' />
                </button>
            </div>
            <div id="background" />
        </StyledMain>
    )
}

export default Main
