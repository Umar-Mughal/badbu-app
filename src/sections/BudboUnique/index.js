import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import table from '../../assets/images/table.svg';
import uniqueImage from '../../assets/images/unique-img.svg';
import uniqueImageMob from '../../assets/images/unique-img-mob.png';
import violetMap from '../../assets/images/violet-map.svg';
import violetMapMob from '../../assets/images/violet-map-mob.svg';
import Notification from '../../components/Notification';
import { useMobileMode } from '../../shared';
import { StyledBudboUnique } from './styles';
import Unique from './Unique';
import { mockCannabisData, mockFeatures } from './constants';

function BudboUnique({ setCurrentLink }) {
    const isMobileMode = useMobileMode()
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('industry')
        }
    }, [isVisible])
    return (
        <StyledBudboUnique className='position-relative'>
            <div className="container">
                <div className='width-wrapper col-12 col-xl-10'>

                    {/* added separate section for react-hook-inview */}
                    <Unique setCurrentLink={setCurrentLink} />

                    {isMobileMode ?
                        <img src={uniqueImageMob} alt="Budbo Unique" className='w-100 unique-img' />
                        :
                        <div style={{ maxWidth: '860px' }}>
                            <img src={uniqueImage} alt="Budbo Unique" className='w-100 unique-img'
                                 width={'100%'} height={'100%'} />
                        </div>

                    }
                    <div style={{ maxWidth: '860px' }}>
                        <h5 style={{ fontWeight: 600 }}>Unique features you’ll be hard pressed to
                            find anywhere else:</h5>
                        <ul className='unique-features'>
                            {mockFeatures.map((feature, index) => (
                                <li key={index} className="border d-flex align-items-center bg-white">
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            <img src={feature.logo} alt={feature.title} className="me-3" />
                                            <h5>{feature.title}</h5>
                                        </div>
                                        <p>{feature.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3>Budding Technologies offers a complete ecosystem <br /> putting
                            Budbo head-and-shoulders above the <br /> competition</h3>
                    </div>
                </div>
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <img src={table} alt="Budbo Unique" className='table second' />
                    </div>
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        <Notification
                            title='Become a pioneer in the brave new cannabis world.'
                            description='Invest in Budbo today!'
                            link='/'
                            linkText='Join the Team!'
                        />
                        <h2 className='margin-top' ref={ref} id="industry">The Numbers Are In: They Suggest You
                            Should Invest in
                            Budbo Now</h2>
                        <h3 className='mt-4 mb-5'>
                            A quick look at the industry statistics that paint a clear <br />
                            picture: Don’t let this opportunity slip away!
                        </h3>
                        <p className='text-colored'>
                            Its all-encompassing model makes Budbo a best-in-class global platform for all
                            things cannabis.
                            Powered by blockchain and the increasing number of states where cannabis is legalized,
                            this business model is virtually endlessly scalable, offering
                            <span className='text-body fw-bold'> an unparalleled potential for growth.</span>
                        </p>
                        <div className='violet-map'>
                            <h2>
                                New Frontier Data, released the <br className='d-none d-lg-block' /> Global
                                Cannabis Report:
                                <span className='d-block'>2019 Industry Outlook</span>
                            </h2>
                            <h3 className='mt-5'>
                                Raport estimates the global total addressable cannabis market (regulated and illicit)
                                at $344 billion USD and identifying the top five regional markets to be:
                            </h3>
                            <img src={isMobileMode ? violetMapMob : violetMap}
                                alt="Violet Map" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        <ul className='cannabis-data'>
                            {mockCannabisData.map((data, index) => (
                                <li key={index}>
                                    {data.title}
                                    <img src={data.image} alt={data.index} className="w-100" />
                                    {data.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBudboUnique >
    )
}

export default BudboUnique;
