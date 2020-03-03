export default function randomColor() {
    const primarys = ['#EDC4E6','#D2CAF7','#88CCF1', '#F8E8B9']; 
    const secondarys = ['#A79AB7','#999FF7','#BEDFE9', '#8DA268'];
    const darkColor = ['#303036','#44444C'];

    const pink = ['#EDC4E6', '#A79AB7', '#303036']
    const purple = ['#D2CAF7', '#999FF7', '#303036']
    const blue = ['#88CCF1','#BEDFE9', '#44444C']
    const yellow = ['#F8E8B9', '#8DA268', '#44444C']

    const randInt = Math.floor(Math.random() * (4 - 0)) + 0;
    return {
        primary: primarys[randInt],
        secondary: secondarys[randInt],
        dark: randInt <= 1 ? darkColor[0] : darkColor[1],
    }
}