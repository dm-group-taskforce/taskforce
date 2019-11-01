import XXX from '../../Assets/xxx.png'
import sgtImage from '../../Assets/angry-sgt-1.png'
import aliens from '../../Assets/aliencollege.png'
import rank1 from '../../Assets/rank1.PNG'
import rank2 from '../../Assets/rank2.png'
import rank3 from '../../Assets/rank3.PNG'
import rank4 from '../../Assets/rank4.PNG'
import rank5 from '../../Assets/rank5.PNG'
import rank6 from '../../Assets/rank6.PNG'
import "./carouselinfo.scss"

const info = [
    {
        content: `Are you ready to become your best self? Complete real-life task to help protect Area 51 
        from the alien invaders.`,
        img: aliens,
        style: 'card1',
        color: 'rgb(75, 75, 75)',
        borderColor: '#13e6d8'
    },
    {
        content: `How it Works.
        Your life is the role playing game. Complete enough task 
        to earn a new badge and get promoted to move up the ranks to unlock more features. As you 
        earn more points you will be able to unlock more levels. `,
        img: rank1, 
        img2: rank2,
        img3: rank3,
        img4: rank4,
        img5: rank5,
        img6: rank6,
        style: 'card2'
    },
    {
        content: `Be careful though to not procrastinate too often or you will hear from 
        Sgt. Yeller. Don't have an account! Click Register to get started.`,
        img: sgtImage,
        style: 'card3'
    }
]

export default info;