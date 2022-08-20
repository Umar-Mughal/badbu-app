import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import { StyledBlockChainTechnology } from './styles'
import { mockBlockchainTechnologies } from './constants';

function BlockchainTechnology({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('blockchain')
        }
    }, [isVisible])
    return (
        <StyledBlockChainTechnology>
            <div className="container col-12 col-xl-10">
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <h2 className="mb-5" id="blockchain" ref={ref}>How Does Blockchain Technology <br />
                            Fuel Budding Technologies?</h2>
                        <ul className='blockchain-list'>
                            {mockBlockchainTechnologies.map((blockchainTechnology, index) => (
                                <li key={index}>
                                    <img className='mb-4 mb-md-5 logo' src={blockchainTechnology.logo} alt={index} />
                                    {blockchainTechnology.title}
                                    <div className='bg-white p-3 my-5' style={{ maxHeight: '860px', borderRadius: '48px' }}>
                                        <picture className="d-flex">
                                            <source srcSet={blockchainTechnology.image} media="(min-width: 992px)" />
                                            <img src={blockchainTechnology.image2} alt={index} className="w-75 mx-auto" />
                                        </picture>
                                    </div>

                                    {blockchainTechnology.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBlockChainTechnology>
    )
}

export default BlockchainTechnology
