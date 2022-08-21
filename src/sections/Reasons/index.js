import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import mentor from '../../assets/images/mentor.png'
import reason5 from '../../assets/images/reason5-bg.png';
import reason7Map from '../../assets/images/reason7-map.png'
import mentor2 from '../../assets/images/stephen-CFO.png'
import table from '../../assets/images/table.svg'
import PhoneSwiper from '../../components/PhoneSwiper';
import { StyledReasons } from './styles'
import { mockMentorAwards, mockStephenCFO, reason1Content } from './constants'

import 'swiper/css';

function Reasons({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('reasons')
        }
    }, [isVisible])
    return (
        <StyledReasons>
            <div className='container'>
                <div className='width-wrapper col-xl-10'>
                    <h2 ref={ref} id="reasons" className='reasons-title'><span>7 reasons to invest
                    </span>
                        {' '}and why Budding Technologies, Inc.
                        will be THE <span className='d-block' style={{ color: 'var(--primary)' }}>
                            breakout star in your investment portfolio</span>
                    </h2>


                    <div className="reasons reason1 border-bottom">
                        <h6># REASON 1</h6>
                        <h3 className="mt-2 mb-5">Incredible potential for revenue growth; Budding Technologies, Inc.
                            has built a whole ecosystem that benefits:
                            <span className='text-primary d-block'> dispensaries, growers,
                                manufacturers, couriers, and consumers.</span>
                        </h3>
                        <h5 className='mb-4'>
                            Budding Technologies, Inc. and its “Budbo” suite of products are far more than
                            an app. Budbo is
                            a complete ecosystem that is poised for endless scalability and revenue growth.</h5>
                        <p className='text-colored'>
                            As the global cannabis industry transitions from an illicit to a legal economy,
                            this is your opportunity to tap into the unique opportunity of legalized cannabis
                            sales on a massive scale.
                            <br />
                            <br />
                            Budbo bridges the gaps between patient,
                            recreational user, dispensary, manufacturer, and grower.
                            <br />
                            <br />
                            <span className='text-body'>
                                There are three parts to the Budbo Ecosystem:
                            </span>
                        </p>
                        <ul className='ecosystem w-100'>
                            {reason1Content.map((item, index) => (
                                <>
                                    <li key={index} className="border-bottom position-relative">
                                        <div className='d-flex  align-items-center flex-wrap flex-lg-nowrap'>
                                            <div className='d-flex align-items-center me-lg-5 mb-4 mb-lg-0 rounded'
                                                style={{ backgroundColor: item.background }}>
                                                <span className='fw-bold' style={{ color: item.textColor }}>
                                                    Budbo {item.title}</span>
                                            </div>
                                            <p className='text-colored'>{item.text}</p>
                                        </div>
                                        <div className="w-100 mt-5 position-relative"
                                             style={{ background: `url(${item.image}) left center/contain no-repeat` }}>
                                            <img src={item.image} alt={item.title} className="d-none d-md-block w-100" />
                                        </div>
                                    </li>
                                </>

                            ))}
                        </ul>
                    </div>


                    <div className="reasons reason2 border-bottom">
                        <h6># REASON 2</h6>
                        <h3 className="mt-2 mb-5">
                            <span className="text-primary">Budbo’s unique marketplace has </span>{' '}
                            proven to be highly effective in user engagement and retention.
                        </h3>
                        <p className='text-colored'>
                            Budbo’s unique "product first" approach is the perfect alignment between our business and operating models.
                            <br />
                            <br />
                            One of Budbo's many features, the Discovery “swiping” component, made popular by applications like "Tinder", invites
                            users to browse a wide variety of cannabis products and facilitates a quick
                            and easy discovery process.
                            <br />
                            <br />
                            It helps users find and order exactly what they want in a simple gamified manner.
                        </p>

                        <PhoneSwiper description discoverVideo />
                    </div>

                    <div className="reasons reason3 border-bottom">
                        <h6># REASON 3</h6>
                        <h3 className='mt-2 mb-2 mb-md-5'>
                            Budbo is the first holistic ecosystem that touches every stakeholder of the {' '}
                            <span className="text-primary">cannabis industry.</span></h3>
                        <img src={table} alt="Budbo Unique" className='table' />
                        <p className='text-colored'>
                            <br />
                            <br />
                            By encompasing the entire cannabis ecosystem, and working closely with our third party partners
                            and API integrations, Budbo is poised for near
                            limitless scalability and an incredible opportunity for revenue growth potential.
                            <br />
                        </p>
                    </div>

                    <div className="reasons reason4 border-bottom">
                        <h6># REASON 4</h6>
                        <h3 className='mt-2 mb-5'>
                            Our patent pending <span className="text-primary">product matching</span>{' '}
                            application based on user input, lab results
                            and consumer interactions, will revolutionize how patients and consumers find products.
                        </h3>
                        <p className='text-colored'>
                            Built to put a budtender in the palm of your hand, this patent pending feature is on the cutting
                            edge of scientific research.
                            <br />
                            <br />
                            The AI-driven algorithm is improving every day with the help of one of Budding
                            Technologies, Inc.’s key advisors; Dr. Uma Dhanablan.
                        </p>

                        <PhoneSwiper reason4 description />

                        <div className='mentor d-lg-flex align-items-end'>
                            <img src={mentor} alt="mentor" className='col-8 mx-auto mb-4 d-block col-lg-3 me-lg-5' />
                            <ul>
                                {mockMentorAwards.map((award, index) => (
                                    <li key={index} className='ms-4 ms-lg-0 mb-1'>
                                        <p>{award}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className='mob-font-size'>
                            <span className='text-primary'>Our AI-driven algorithm is constantly improving </span>
                            to help recommend the very best in cannabis products, therapies, and experiences to our users.
                            <br />
                            <br />
                            Patent pending and available on the Budbo platform and for licensing around the world.
                        </p>

                    </div>

                    <div className="reasons reason5 border-bottom">
                        <h6># REASON 5</h6>
                        <h3 className='mt-2 mb-5'>
                            This is your opportunity to <span className="text-primary">own shares</span> in a company
                            disrupting not one, but <span className="text-primary">TWO multi billion dollar
                                industries. </span>
                        </h3>

                        <p className='with-indent mb-4 text-colored'>The regulated cannabis market in the US alone will
                            grow at a 25.5% CAGR between 2022 and 2030.</p>


                        <p className='with-indent mb-4 text-colored'>
                            The global blockchain market will grow from $7.18 billion
                            in 2022 to $163.83 billion by 2029, at a CAGR of 56.3%.</p>

                        <p className='text-colored'>
                            By combining these two markets, Budbo empowers the cannabis industry to grow at
                            an even faster pace and removes inefficiencies and challenges that cannabis
                            businesses are facing today.
                        </p>
                        <div className="img-wrapper position-relative">
                            <img src={reason5} alt="reason5" className='d-none d-lg-block w-100' />
                        </div>

                    </div>

                    <div className="reasons reason6 border-bottom">
                        <h6># REASON 6</h6>
                        <h3 className='mt-2 mb-5'>
                            <span className="text-primary">Here’s our exit strategy. </span>{' '}
                            Invest in experience.
                        </h3>
                        <h4>
                            Our aim in approximately two years is to have an ARR of a minimum of $10 million and a
                            valuation of approximately $100-$150 million, giving Budding Technologies, Inc. the ability to go to market
                            either via a private or public offering.
                        </h4>
                        <h4 className='my-5'>
                            Budding Technologies with also explore the possibility of being acquired if the opportunity presents itself.
                        </h4>
                        <p className='text-colored'>
                            Budding Technologies, Inc.'s <span className='text-body'>CFO Stephen Rosen </span>{' '}
                            brings extensive expertise from both the public and
                            private sectors in these regards. <span className='text-body'>
                                Stephen has served as the CFO for private and public
                                companies for over 30 years,</span> ranging from Wireless Broadcast and Telecom,
                            to Cloud AI
                            and ML, SaaS, Apparel manufacturing and Foodtech on an international basis.
                        </p>

                        <div className='mentor d-lg-flex align-items-start justify-content-start 
                        position-relative col-10 mx-auto col-md-12'>
                            <div className='col-12 col-lg-3'>
                                <img src={mentor2} alt="mentor" className='w-100' style={{ maxWidth: '400px' }} />
                                <p className='position-absolute text-colored'>
                                    Stephen Rosen <br />
                                    CFO of Budding Technologies, Inc.
                                </p>
                            </div>

                            <ul className='pt-5 mt-5 pt-lg-0 mt-lg-3 mt-lg-0 col-lg-7'>
                                {mockStephenCFO.map((text, index) => (
                                    <li key={index} className='mb-2'>
                                        {text.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="reasons reason7">
                        <h6># REASON 7</h6>
                        <h3 className='mt-2 mb-5'>
                            <span className="text-primary">You Can Help Millions of People</span>{' '}
                            Gain Access to the Cannabis Products They Need
                        </h3>
                        <h4 className='mb-4'>
                            Cannabis is gaining more traction in the US, but also in other countries on almost
                            every continent.
                        </h4>
                        <p className='text-colored'>
                            As the medical world unveils the benefits of cannabis for a variety of illnesses, more
                            and more patients all over the world can heal from the secrets being revealed within the cannabis flower.
                        </p>
                        <div className='map-wrapper mt-4 mb-3 position-relative'>
                            <img src={reason7Map} alt="reason7Map" className='d-md-block reason7-map-mobile' />
                            <p className='text-colored'>
                                By investing in Budding Technologies, Inc., you help patients and consumers around the world gain faster
                                and easier access to the
                                cannabis products they need. Now is the ideal time to take advantage of the growth
                                potential of the cannabis industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledReasons>
    )
}
export default Reasons 
