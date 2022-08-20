import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import Notification from '../../components/Notification';

export default function Unique({ setCurrentLink }) {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('advantage')
        }
    }, [isVisible])

    return (
        <div style={{ maxWidth: '860px' }}>
            <Notification
                title='Ready to invest in a future-proof platform? Start Here!'
                link='/'
                linkText='Take Control of your Future'
                transformed
                w80
            />
            <h2 className='transformed' ref={ref} id="advantage">What Makes Budbo Unique</h2>
            <h3 className='mb-5'>Budbo is an all-in-one turnkey solution for every stakeholder in
                the cannabis market,
                from growers and sellers to the final customers and every distributor in between.
                With Budbo, everyone can benefit from secure transactions, state-of-the-art
                business management,
                and an opportunity to discover new cannabis products with just a swipe or a slide.
            </h3>
            <p className='text-colored'>
                Its all-encompassing model makes Budbo a best-in-class global platform
                for all things cannabis.
                Powered by blockchain and a worldwide movement towards legalization,
                our business model is virtually endlessly scalable,
                offering <span className="text-body fw-bold"> an unparalleled potential for growth.</span>
            </p>
        </div >
    )
}
