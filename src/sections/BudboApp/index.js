import inside1 from '../../assets/images/inside1.svg'
import inside2 from '../../assets/images/inside2.svg'
import inside3 from '../../assets/images/inside3.svg'
import inside4 from '../../assets/images/inside4.svg'
import uma from '../../assets/images/uma.svg'
import umaMob from '../../assets/images/uma-mob.svg'
import SlideTo from '../../components/SlideTo'
import WhoBudboIsFor from '../../components/WhoBudboIsFor/index';
import { StyledColoredWrapper, StyledInsideUl, useMobileMode } from '../../shared';
import { StyledBudboApp } from './styles'

function BudboApp() {
    const isMobileMode = useMobileMode()

    return (
        <StyledBudboApp>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <div className="mob-img d-md-none" />
                        <h2 className='budbo-title'>Budbo App</h2>
                        <h5>The right cannabis products just a screen tap away</h5>
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                        <h3>The app allows consumers to easily find and order their preferred
                            cannabis products in a familiar and gamified manner through
                            our modern user-friendly interface.
                        </h3>

                        <SlideTo />
                        <SlideTo discover />

                        <h5 className='what-inside-title'>What{"'"}s inside?</h5>
                        <StyledInsideUl>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    <img src={inside1} alt="inside1" className='me-3' />
                                    <h5>AI-Driven user experience </h5>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-start w-100'>
                                    <img src={inside2} alt="inside1" className='me-3 mt-1' />
                                    <div className='flex-grow-1'>
                                        <h5>Wide range of tokens and cryptocurrencies</h5>
                                        <h6 className='text-colored mt-2'>to incentivize, engage, <br />
                                            and reward users.</h6>
                                    </div>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    <img src={inside3} alt="inside3" className='me-3' />
                                    <h5>Scalability powered by
                                        blockchain <br /> technology</h5>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    <img src={inside4} alt="inside4" className='me-3' />
                                    <h5>Mobile first approach so<br />
                                        users can access Budbo anywhere</h5>
                                </div>
                            </li>
                        </StyledInsideUl>
                    </div>
                </div>
                <StyledColoredWrapper className='col-12 col-lg-10'>
                    <div className='width-wrapper col-12'>
                        <div style={{ maxWidth: '860px' }}>

                            <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                            <h3>
                                Budbo’s unique marketplace has proven to be highly effective
                                in driving alignment between our business and operating models.
                            </h3>
                            <p className='text-colored text'>
                                The combination of a best-in-class mobile app and business intelligence
                                tool empowers users to connect and interact in ways that have never
                                been possible before.
                                <br />
                                <br />
                                By adopting the “swiping” component made popular by applications like "Tinder",
                                Budbo facilitates a quick and easy product discovery process. Users
                                can now find and purchase new products in a way never before possible.
                                <br />
                                <br />
                                Our patent pending product matching feature is on the cutting edge of scientific
                                research.  The AI-driven algorithm is improving everyday with the help of one of
                                Budbo’s key advisors, Dr. Uma Dhanablan.
                            </p>
                            {isMobileMode ?
                                <img src={umaMob} alt="uma" className='d-block my-4 w-100' />
                                :
                                <img src={uma} alt="uma" className='uma-img d-block' />
                            }
                            <div className='col-11 mx-auto'>
                                <h4 className='mb-2'>Dr. Uma Dhanabalan</h4>
                                <h5 style={{ fontWeight: 500 }}>Key Advisor to Budding Technologies, Inc.</h5>
                                <p className='text-colored with-indent mt-3 mt-md-5 mb-4 ms-3 ms-md-0'>
                                    Dr. Dhanabalan is a highly respected and educated physician
                                    and known to most
                                    as Dr Uma. She completed her Bachelor of Arts degree with Honors from Rutgers
                                    University
                                    and her Medical Degree from the University of Medicine & Dentistry in Newark,
                                    New Jersey.
                                </p>

                                <p className='text-colored with-indent mb-4 ms-3 ms-md-0'>
                                    She completed her Family Practice Residency at the Medical University of South
                                    Carolina, in
                                    Charleston, South Carolina. She has her Master’s in Public Health and completed her
                                    Occupational
                                    & Environmental Medicine Residency and Fellowship in Heavy Metals at the Harvard
                                    School of
                                    Public Health in Boston, Massachusetts. She is a Fellow of the American Academy of
                                    Family
                                    Physicians.
                                </p>
                                <p className='text-colored with-indent mb-4 ms-3 ms-md-0'>
                                    She is a Diplomate in Cannabinoid Medicine, Certified by the American Academy of
                                    Cannabinoid
                                    Medicine, and a Medical Review Officer Certified by  Medical Review Officer
                                    Certification
                                    Council.
                                </p>
                            </div>
                            <p className='text-colored d-none d-md-block my-5'>
                               
                            </p>
                            <WhoBudboIsFor contentToShow='app' />
                        </div>
                    </div>


                </StyledColoredWrapper>
            </div>
        </StyledBudboApp >
    )
}

export default BudboApp
