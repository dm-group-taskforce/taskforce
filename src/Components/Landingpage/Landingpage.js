import React from "react";
import "./LandingPage.scss"
import angrysgt from "../../Assets/angry-sgt-1.png"
import rank1 from "../../Assets/rank1.PNG"
import rank2 from "../../Assets/rank2.png"
import rank3 from "../../Assets/rank3.PNG"
import rank4 from "../../Assets/rank4.PNG"
import rank5 from "../../Assets/rank5.PNG"
import rank6 from "../../Assets/rank6.PNG"
import rank7 from "../../Assets/rank7.png"
import rank8 from "../../Assets/rank8.PNG"
import rank9 from "../../Assets/rank9.png"
import rank10 from "../../Assets/rank10.png"

function LandingPage() {
    return (

        <main className="wholething">
            <div className="all">

                <header className="heading">
                    <h1 className="head">WELCOME TO TASKFORCE</h1>
                </header>

                <div className="bothcontainers">
                    <div className="container1">

                        <main className="leftside">
                            <h2>Are you ready to become your best self?</h2>
                            <p>Keep track of everything you need to do all in
                                one place with a user friendly design</p>
                            <h1>insert image of our task tables</h1>

                            <p>See the type of person you become after completing
                                tasks with a personal pie chart.
                            </p>
                            <h1>insert photo of our pie chart</h1>

                            <p>If you dont complete a task within 24 hours, SGT
                                unknown is going to get after you and demand
                                something progressive gets done</p>
                            <img src={angrysgt} alt="angrySGT" />
                            <img src={angrysgt} alt="angrySGT" />
                            <img src={angrysgt} alt="angrySGT" />

                      
                        </main>

                    </div>
                    <div className="container2">

                        <main className="rightside">
                            <p>As you complete tasks your experience bar will increase.
                                Once you have a certain amount you rank up!</p>
                            <div className="rankpics">
                                <img src={rank1} alt="rank" />
                                <img src={rank2} alt="rank" />
                                <img src={rank3} alt="rank" />
                                <img src={rank4} alt="rank" />
                                <img src={rank5} alt="rank" />
                                <img src={rank6} alt="rank" />
                                <img src={rank7} alt="rank" />
                                <img src={rank8} alt="rank" />
                                <img src={rank9} alt="rank" />
                                <img src={rank10} alt="sgtmaj" />
                            </div>
                            <p>But be careful, if you get lazy and don't complete
                                any tasks over time, SGT unknown is going to demote you!
                            </p>
                        </main>

                    </div>
                </div>

            </div>
        </main>
    )
}
export default LandingPage;