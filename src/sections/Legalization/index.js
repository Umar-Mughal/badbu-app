import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import locationMap from '../../assets/images/location-map.svg';
import locationMapMob from '../../assets/images/location-map-mob.svg';
import Notification from '../../components/Notification';
import { StyledLegalization } from './styles';

function Legalization({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('budding')
        }
    }, [isVisible])
    return (
        <StyledLegalization className='overflow-hidden'>
            <div className='container'>
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        <h2 className='mb-5' ref={ref} id="budding">Continued <br className='d-block d-md-none' />
                            Legalization.</h2>
                        <h4>
                            <span className="text-primary">In the U.S. many states are expected to include cannabis reform
                                initiatives</span> on the November 2022 ballots.
                            There is an estimated population of 16.7 million cannabis consumers in the 16 states that
                            have the potential of legalization.
                        </h4>
                        <h5 className='d-md-none'>Budbo locations:</h5>
                        <img src={locationMapMob} alt="Budbo Locations" className="location-map d-md-none" />
                        <h4 className='my-5 position-relative' style={{ zIndex: 1 }}>
                            A European Push Towards Legalization:</h4>
                        <p className='text-colored mb-5 mb-lg-0'>
                            With Malta’s December 2021 legalization of cannabis and the legalization in Germany and
                            Luxembourg, momentum has been growing for other countries to participate in this
                            worldwide movement. Curaleaf, an American operator has already invested $285 million
                            dollars in EMMAC Life Sciences, a multinational European operator.</p>
                        <h5 className='d-none d-md-block'>Budbo locations:</h5>
                    </div>
                    <img src={locationMap}
                        alt="Budbo Locations" className='d-none d-md-block location-map' />
                    <Notification
                        title='As the market grows, your future can surely blossom with it.'
                        description='This is your chance to grow a future in cannabis and blockchain with Budding Technologies.'
                        link='/'
                        linkText='Take Control: Blossom With Budbo'
                        minimized
                    />
                </div>
            </div>
        </StyledLegalization >
    )
}

export default Legalization
