import pinkImage from '../../content/assets/av-pink.png'
import purpleImage from '../../content/assets/av-purple.png'
import blueImage from '../../content/assets/av-blue.png'
import yellowImage from '../../content/assets/av-yellow.png'

const themes = {
    pink: {
        primary: '#EDC4E6',
        secondary: '#72548F',
        shade: '#D5A3C1',
        dark: '#303036',
        image: `url(${pinkImage})`
    },
    purple: {
        primary: '#D2CAF7',
        secondary: '#735CA8',
        shade: '#C3ACDE',
        dark: '#303036',
        image: `url(${purpleImage})`
    },
    blue: {
        primary: '#BCE1F3',
        secondary: '#504893',
        shade: '#A4BDE1',
        dark: '#44444C',
        image: `url(${blueImage})`
    },
    yellow: {
        primary: '#F8E8B9',
        secondary: '#916958',
        shade: '#D5C2A2',
        dark: '#44444C',
        image: `url(${yellowImage})`
    }
}
export default themes