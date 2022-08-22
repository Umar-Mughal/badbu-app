import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import budbo from '../../assets/images/budbo-bg.png'
import { StyledBuildings } from './styles';

function Buildings({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('ecosystem')
        }
    }, [isVisible])

    return (
        <StyledBuildings className='position-relative'>
            <div className="container">
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '850px' }}>
                        <h1 id="ecosystem" ref={ref}>Unpacking the Budding <br />
                            Technologies, Inc. <br />
                            Ecosystem
                        </h1>
                        <h3>
                            Budbo is far more than just an app. It is a holistic ecosystem, <br />
                            touching every stakeholder of the cannabis industry and <br /> poised
                            for endless scalability at all levels.
                        </h3>
                        <div>
                            <img src={budbo} alt="budbo" className='budbo__img d-none d-md-block' />
                        </div>
                    </div>
                </div>

            </div>
        </StyledBuildings>
    )
}

export default Buildings;
