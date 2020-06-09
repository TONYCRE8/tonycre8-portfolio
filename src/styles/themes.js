import pinkAV from '../../content/assets/av-pink.png'
import purpleAV from '../../content/assets/av-purple.png'
import blueAV from '../../content/assets/av-blue.png'
import yellowAV from '../../content/assets/av-yellow.png'

import pinkAbout from "../../content/assets/abt-pink.jpeg"
import purpleAbout from "../../content/assets/abt-purple.jpeg"
import blueAbout from "../../content/assets/abt-blue.jpeg"
import yellowAbout from "../../content/assets/abt-yellow.jpeg"

const themes = {
    pink: {
        primary: '#EDC4E6',
        secondary: '#72548F',
        shade: '#D5A3C1',
        dark: '#303036',
        avatar: `url(${pinkAV})`,
        aboutImg: `url(${pinkAbout})` 
    },
    purple: {
        primary: '#D2CAF7',
        secondary: '#735CA8',
        shade: '#C3ACDE',
        dark: '#303036',
        avatar: `url(${purpleAV})`,
        aboutImg: `url(${purpleAbout})` 
    },
    blue: {
        primary: '#BCE1F3',
        secondary: '#475c99',
        shade: '#A4BDE1',
        dark: '#44444C',
        avatar: `url(${blueAV})`,
        aboutImg: `url(${blueAbout})` 
    },
    yellow: {
        primary: '#F8E8B9',
        secondary: '#916958',
        shade: '#D5C2A2',
        dark: '#44444C',
        avatar: `url(${yellowAV})`,
        aboutImg: `url(${yellowAbout})` 
    }
}
export default themes