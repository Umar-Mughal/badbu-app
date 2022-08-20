
import { useEffect } from 'react'
import { useInView } from 'react-hook-inview'

import Notification from '../../components/Notification'
import { StyledBillionDollar } from './styles'
import { mockBillionIdea, mockBillionSolution } from './constants'

function BillionDollar({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('idea')
        }
    }, [isVisible])

    return (
        <StyledBillionDollar>
            <div className="container">
                <div className="width-wrapper col-12 col-md-10 ">
                    <div style={{ maxWidth: '860px' }}>
                        <h2 className='mt-0' id="idea" ref={ref}
                            style={{ maxWidth: '760px' }}>{mockBillionIdea.title}</h2>
                        <img src={mockBillionIdea.image} alt="idea" className="w-100" />
                        {mockBillionIdea.description}
                        {mockBillionIdea.text}
                        <Notification
                            title="Gain Early Access to the Golden Age of Cannabis and Blockchain"
                            description="Become a part of a revolutionary concept, a business that brings together two
                         of the fastest growing industries of our time! Investing in Budding Technologies, Inc and become 
                         a part of the global movement!"
                            link="/"
                            linkText="Join the Revolution"
                            minimized
                        />
                        {mockBillionSolution.title}
                        <img src={mockBillionSolution.image} alt="solution" className="w-100" />
                        {mockBillionSolution.description}
                        {mockBillionSolution.text}
                        {mockBillionSolution.text2}
                    </div>
                </div>

            </div>
        </StyledBillionDollar>
    )
}

export default BillionDollar
