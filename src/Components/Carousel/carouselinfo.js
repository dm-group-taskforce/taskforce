import XXX from '../../Assets/xxx.png'
import sgtImage from '../../Assets/angry-sgt-1.png'
import aliens from '../../Assets/aliencollege.png'
import rank7 from '../../Assets/rank7.png'
import rank2 from '../../Assets/rank2.png'
import rank3 from '../../Assets/rank3.PNG'
import rank4 from '../../Assets/rank4.PNG'
import rank5 from '../../Assets/rank5.PNG'
import rank6 from '../../Assets/rank6.PNG'
import goodchart from '../../Assets/goodchart.PNG'
import LVL2screen from '../../Assets/LVL2screen.png'
import "./carouselinfo.scss"

const info = [
    {
        content: `Are you ready to become your best self? TaskForce has a user friendly design with gamification to motivate you to keep going. `,
        img: aliens,
        style: 'card1',
        color: 'rgb(75, 75, 75)',
        borderColor: '#13e6d8'
    },
    {
        content: `
        Your life is the role playing game. Complete enough tasks
        and get promoted!`,
        img: rank2, 
        img2: rank3,
        img3: rank4,
        img4: rank5,
        img5: rank6,
        img6: rank7,
        style: 'card2'
    },
    {
        content: `As you move up the ranks more levels unlock. Hurry the aliens are attacking!`,
        img: LVL2screen,
        style: 'card3'
    },
    {
        content: `If that isn't enough motivation, SGT ROCKY will send you an email 
        if too much time passes and no tasks have been completed.`,
        img: sgtImage,
        style: 'card4'
    },
    {
        content: `See what type of person you are becoming through your hard word with the pie graph tracker.`,
        img: goodchart,
        style: 'card5'
    },
]

export default info;