import logo1 from '../../assets/images/offer-icon1.svg';
import logo2 from '../../assets/images/offer-icon2.svg';

export const mockTextContent = {
    title: <h2>Whats Changing - and Why <br className='d-none d-md-block' /> it Matters to you and your Portfolio?</h2>,
    subtitle: 'We are now seeing a strong and effective push for local, state, and federal governments around the world to establish,' +
        ' regulate, and encourage an open and fair market for the use and sale of cannabis and' +
        ' cannabis related products.',
    subtitle2: 'This is where Budbo comes into play, providing the perfect solution that governments,' +
        ' cannabis businesses, patients, and consumers are all looking for.',
    text:
        <p className='text'>
            From a technology perspective, the rapidly evolving cannabis industry presents a
            unique opportunity: <span>legalized sales of cannabis on a massive scale.</span>
            <br />
            <br />
            All the pieces have fallen into place: the cannabis industry can finally blossom from government regulation
            and the right technologies can thrive. <span>If you’re looking for an investment with incredible growth and revenue potenital</span>,
            look no further: as one of the early investors in Budding Technologies, Inc., you get a front-row seat to the birth
            of a <span>technology icon: Budbo.</span>
        </p>
}

export const mockOffers = [
    {
        logo: logo1,
        text: <p> Budbo offers <span>safe and secure transactions for cannabis businesses and
            users.</span> The cloud-based platform brings together all relevant parties in the cannabis
            <span> industry to increase standardization, transparency, and efficiency across all channels.</span></p>
    },
    {
        logo: logo2,
        text: <p>The missing piece of the pie, Budding Technologies, Inc. has created a worldwide solution for all stakeholders of
            the cannabis industy.
            <span> Budbo provides visibility into the entire life of the cannabis seed-to-sale process and a unique marketplace
                for consumers.</span></p>
    }
]
