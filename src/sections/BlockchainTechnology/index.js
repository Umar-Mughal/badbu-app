import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import token1 from '../../assets/images/token1.png'
import token2 from '../../assets/images/token2.png'
import token3 from '../../assets/images/token3.png'
import { StyledBlockChainTechnology } from './styles'
import { mockBlockchainTechnologies } from './constants';

function BlockchainTechnology({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    const blockChain1 = mockBlockchainTechnologies[0]
    const blockChain2 = mockBlockchainTechnologies[1]
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
                            <li className={'position-relative'}>
                                <div className='d-none d-md-block token_1_blockchain'>
                                    <img src={token1} alt={'blockchain1'} width={'100%'} height={'100%'} />
                                </div>
                                <img className='mb-4 mb-md-5 logo' src={blockChain1.logo} alt={'blockchain1'} />
                                {blockChain1.title}
                                <div className={`bg-white my-4 ${blockChain1.classes}`}>
                                    <picture className="d-flex">
                                        <source srcSet={blockChain1.image} media="(min-width: 992px)" />
                                        <img src={blockChain1.image2} alt={'blockchain1'} className="w-75 mx-auto" />
                                    </picture>
                                </div>
                                {blockChain1.description}
                            </li>
                            <li className={'position-relative'}>
                                <div className='d-none d-md-block token_2_blockchain'>
                                    <img src={token2} alt={'blockchain2'} width={'100%'} height={'100%'} />
                                </div>
                                <div className='d-none d-md-block token_3_blockchain'>
                                    <img src={token3} alt={'blockchain2'} width={'100%'} height={'100%'} />
                                </div>
                                <img className='mb-4 mb-md-5 logo' src={blockChain2.logo} alt={'blockchain1'} />
                                {blockChain2.title}
                                <div className={`bg-white my-4 ${blockChain2.classes}`}>
                                    <picture className="d-flex">
                                        <source srcSet={blockChain2.image} media="(min-width: 992px)" />
                                        <img src={blockChain2.image2} alt={'blockchain1'} className="w-75 mx-auto" />
                                    </picture>
                                </div>
                                {blockChain2.description}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBlockChainTechnology>
    )
}

export default BlockchainTechnology
