import { useEffect } from 'react';
import { useInView } from 'react-hook-inview'

import { getClassNames, useMobileMode } from '../../shared';
import Accordion from './Accordion';
import { mockBudboTeam } from './mockBudboTeam';
import { StyledBudboTeam } from './styles';

function BudboTeam({ setCurrentLink }) {

    const isMobileMode = useMobileMode();
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('faq')
        }
    }, [isVisible])

    return (
        <StyledBudboTeam>
            <div className='width-wrapper col-12 col-xl-10'>
                <div style={{ maxWidth: '860px' }}>
                    {isMobileMode ? <h2 className='mb-5'>What’s Next for You and Budbo</h2>
                        :
                        <h2 className='mb-4'>
                            What’s Next for You and <br />
                            Budbo
                        </h2>
                    }
                    <ul className='roadmap position-relative'>
                        <li>
                            <h3 className='mb-3'>2022</h3>
                            <p className='mb-3 mb-lg-0'>
                                Worldwide customer-facing Budbo app release
                            </p>
                            <p className='mb-3 mb-lg-0'>
                                US and Canada Budbo Connect/dispensary onboarding
                            </p>
                        </li>
                        <li>
                            <h3 className='mb-3'>2023</h3>
                            <p>
                                Israel, Germany, Luxembourg Budbo Connect and dispensary onboarding
                            </p>
                            <p>
                                Budbo Trax release
                            </p>
                        </li>
                        <li>
                            <h3 className='mb-3'>2024</h3>
                            <p>On-going worldwide expansion...</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='width-wrapper'>
                <div className='team-width-container'>
                    <div className='team-wrapper'>
                        <h2 className='text-center'>Meet the <span>Budbo Team</span></h2>
                        <ul className='d-flex flex-wrap team justify-content-center'>
                            {mockBudboTeam.map((member, index) => (
                                <li key={index} className="text-center border rounded px-4 mx-3 mx-md-0 col-md-6">
                                    <span className='position-relative image-wrapper d-block border-rouned'
                                        style={{ background: `url(${member.photo}) center center/cover no-repeat` }} />
                                    <h4 style={{ fontWeight: '500' }} className="my-1">{member.name}</h4>
                                    <span className='d-inline-block'>{member.position}</span>
                                    <p className='text-start'>{member.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='width-wrapper'>
                <div style={{ maxWidth: '1120px' }}>
                    <h2 id="faq" ref={ref} className={getClassNames('text-center',
                        isVisible ? 'VISIBLE!!!!!!' : '')}>FAQ</h2>
                    <ul className='faq col-12 col-md-10 mx-auto'>
                        <Accordion title='How can I place my investment?' />
                        <Accordion title='When will the fully executed subscription agreement be sent?' />
                        <Accordion title='How long does payment process time take?' />
                    </ul>
                </div>
            </div>

        </StyledBudboTeam>

    )
}

export default BudboTeam;
