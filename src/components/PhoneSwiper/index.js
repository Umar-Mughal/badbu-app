import ReactPlayer from 'react-player';

import budboDiscover from '../../assets/budbo-discover.mp4'
import budboMatch from '../../assets/budbo-match.mp4'
import r2Phone1 from '../../assets/images/r2-phone1.png';
import r2Phone3 from '../../assets/images/r2-phone3.png';
import r4Phone1 from '../../assets/images/r4-phone1.png';
import r4Phone3 from '../../assets/images/r4-phone3.png';
import { getClassNames, useTabletMode } from '../../shared';
import { StyledPhoneSwiper } from './styles';

function PhoneSwiper({ reason4, description, switchMobileMode, discover, discoverVideo }) {

    const isTabletDevice = useTabletMode();
    const isForTablet = discover ? switchMobileMode : isTabletDevice
    const videoURL = discoverVideo || discover ? budboDiscover : budboMatch;

    const videoFile = <ReactPlayer width="270px" height="565px" url={videoURL} autoPlay playsInline
        playing loop muted className="react-player" />

    return (
        <StyledPhoneSwiper className='d-flex justify-content-between align-items-end w-100 phone-slider
        position-relative'>
            {isForTablet
                ?
                <div className={getClassNames('w-100 position-relative d-flex justify-content-center')}>
                    {videoFile}
                </div>
                :
                <ul className='d-flex'>
                    <li className='d-flex align-items-end'>
                        {reason4 ?
                            <img src={r4Phone1} alt="phone" className='phone w-100' />
                            :
                            <img src={r2Phone1} alt="phone" className='phone w-100' />
                        }
                    </li>
                    <li>
                        {videoFile}
                    </li>
                    <li className='d-flex align-items-end'>
                        {reason4 ?
                            <img src={r4Phone3} alt="phone" className='phone w-100' />
                            :
                            <img src={r2Phone3} alt="phone" className='phone w-100' />
                        }
                    </li>
                </ul>
            }
            {description && <p className='position-absolute text-center w-100 tip'>
                <span className='underline'></span> </p>}
        </StyledPhoneSwiper>
    )
}
export default PhoneSwiper;
