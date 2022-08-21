import connectBg from '../../assets/images/connect-bg.png';
import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper } from '../../shared';
import { StyledBudboConnect } from './styles';
import { mockBudboConnect } from './constants';

function BudboConnect() {

    return (
        <StyledBudboConnect>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <h2>Budbo Connect</h2>
                        <h5 className='mt-2 mb-5'>We help cannabis businesses to sell more cannabis products with
                            data-driven decision making.</h5>
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO CONNECT</span>
                        <h3>Budbo Connect is a retailer dashboard that provides growers and vendors with business
                            intelligence, empowering them to make proactive, data-driven decisions.</h3>
                        <p className='text-colored mt-5'>
                            Budbo Connect gives dispensaries user generated data laid out in
                            a simple, elegant interface.
                            Point-of-sale and Inventory management API integrations allow for retailers to quickly and
                            effectively keep menus up-to-date on the Budbo App in real time.
                            <br />
                            <br />
                            Our goal is to empower dispensaries to sell more products with a minimal investment of time.
                        </p>
                        <h5 className='mt-5 mb-4'>
                            With Budbo’s industry analytics and actionable insights, cannabis business owners
                            can easily:
                        </h5>
                        <ul className='d-none d-xl-flex justify-content-between flex-wrap'>
                            {mockBudboConnect.map((item, index) => (
                                <li key={index} className='border d-flex justify-content-center align-items-center'>
                                    <div className='d-flex align-items-center w-100'>
                                        <img src={item.logo} alt="inside1" className='me-3' />
                                        <h5>{item.text}</h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <StyledColoredWrapper className='connect col-12 col-lg-10'>
                    <div className='width-wrapper col-12'>
                        <div style={{ maxWidth: '860px' }}>
                            <div className="mobile-image" />
                            <img src={connectBg} alt="connect" className='connect-img d-none d-md-block w-100' />
                            <div className="width-wrapper">
                                <span className='budbo-badge fw-bold d-block mb-2'>BUDBO CONNECT</span>
                                <h3 style={{ lineHeight: '38px' }}>
                                    We expect the <span>increase in foot traffic, improved analytics,
                                        and exceptional customer service</span> to cement strong, longstanding
                                    relationships with all of our dispensary partners.
                                </h3>
                                <p className='text-colored mt-4'>
                                    These key analytics ultimately provide the final solution for dispensary
                                    owners and prospectors, allowing them to know which strains to grow and exactly
                                    which products to stock in order to increase sales and grow revenue.
                                </p>
                            </div>
                            <WhoBudboIsFor contentToShow='connect' />
                        </div>
                    </div>
                </StyledColoredWrapper>
            </div>
        </StyledBudboConnect>
    )
}
export default BudboConnect;
