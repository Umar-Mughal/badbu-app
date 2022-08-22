import bronzeAvatar from '../../assets/images/shareholder/bronze.svg';
import greenAvatar from '../../assets/images/shareholder/green.svg';
import greyAvatar from '../../assets/images/shareholder/grey.svg';
import purpleAvatar from '../../assets/images/shareholder/purple.svg';
import redAvatar from '../../assets/images/shareholder/redAvatar.svg';
import yellowAvatar from '../../assets/images/shareholder/yellow.svg';
import photo1 from '../../assets/images/slider-photo.svg';
import { StyledOptions } from './styles';

export const mockSideBarContent = [
    {
        photo: photo1,
        name: 'Ralph Edwards',
        invested: 'Investor',
        text: 'Budbo Connect is the perfect platform for my dispensaries. I invested and ' +
            'will also be bringing my 8 SoCal dispensaries into the platform .'
    },
    {
        photo: photo1,
        name: 'Jack Finkelstein',
        invested: 'Investor',
        text: 'As the owner of an international packaging brand, I am excited about the Budbo Connect  ' +
            'and what that will mean for my business.'
    },
    {
        photo: photo1,
        name: 'Tommy Rhodes',
        invested: 'Investor',
        text: 'I love this app, and know it will do great things in the future'
    },
    {
        photo: photo1,
        name: 'Travis',
        invested: 'Beach City Hydroponics',
        text: 'Proud new shareholder of Budding Tech and am excited ' +
            'to join the blockchain platform.'
    },
    {
        photo: photo1,
        name: 'Travis Tommy',
        invested: 'Beach City Hydroponics',
        text: 'Proud new shareholder of Budding Tech and am excited ' +
            'to join the blockchain platform.'
    },


]

export const options = [
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $495 - $999<span>2,531 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $1000 - $2999<span>1,036 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $3000 - $4999<span>912 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $5000 - $9999<span>447 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $10000<span>210 Investors</span></StyledOptions>
    },
];

export const colorsAvatars = {
    yellow: {
        img: yellowAvatar,
    },
    red: {
        img: redAvatar,
    },
    green: {
        img: greenAvatar,
    },
    purple: {
        img: purpleAvatar,
    },
    grey: {
        img: greyAvatar,
    },
    bronze: {
        img: bronzeAvatar,
    }
}
