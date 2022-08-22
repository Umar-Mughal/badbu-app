import whatChangedImg from '../../assets/images/what-changed-image.png'
import whatChangedImgMob from '../../assets/images/what-changed-image-mob.png'
import Notification from '../../components/Notification'
import { StyledWhatChanged } from './styles'
import { mockOffers, mockTextContent } from './constants'

function WhatChanged() {
    return (
        <StyledWhatChanged>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        {mockTextContent.title}
                        <img src={whatChangedImg} alt="what-changed" className='d-none d-md-block 
                        what-changed-img w-100' />
                        <div className='mob-img d-md-none'>
                            <img src={whatChangedImgMob} alt="what-changed" width='100%' height='100%'/>
                        </div>
                        <h3>{mockTextContent.subtitle}</h3>
                        <h4>{mockTextContent.subtitle2}</h4>
                        <ul className='offers'>
                            {mockOffers.map((offer, index) => (
                                <li key={index} className="d-flex align-items-start align-items-md-center">
                                    <img src={offer.logo} alt={index} className="me-4" />
                                    {offer.text}
                                </li>
                            ))}
                        </ul>
                        {mockTextContent.text}
                        <Notification
                            title="So far, we’ve zoomed out so you can see the big picture."
                            description="Let’s zoom in on Budbo now so you can make an informed investment decision."
                            link="/"
                            linkText="Own your piece of Cannabis Technology"
                        />
                    </div>
                </div>
            </div>
        </StyledWhatChanged>
    )
}

export default WhatChanged
