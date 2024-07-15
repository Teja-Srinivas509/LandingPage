import React from 'react'
import '../../Components/Intro/Intro.css'
import pic from '../../assets/intro-office.jpg'
import icon from '../../assets/hexagon-green.svg'


function Intro() {
  return (
    <div className='Intro' id='Intro'>
        <div class="content">
            <div className='text'>
                <span class="section-title">INTRO</span>
                <h3>We Offer Some Of The Best Business Growth Services In Town</h3>
                <p>Launching a new company or developing the market position of an existing one can be quite an overwhelming processs at times.
                </p><br></br>
                <p className='italic'> 
                "Our mission here at Aira is to get you through those tough moments relying on our team's expertise in starting and growing companies"</p><br></br>
                <p className='CEO'>Louise Donovan - CEO
                </p>
            </div>
            <div className='container'>
                 <img src={pic} className='intro-pic'/>
            </div>
        </div>
        <div class="skill-list-container">
            <div class="skill-items">
                <img src={icon} className='icon' alt='icon' />
                <span><i class="fa-solid fa-binoculars" id="icon1"></i></span>
                <h3>Environment Analysis</h3>
                <p>
                The starting point of any success story is knowing your current position in the business environment</p>
            </div>
            <div class="skill-items">
                <img src={icon} className='icon' alt='icon' />
                <span><i class="fa-solid fa-list" id='icon2'></i></span>
                <h3>Execution & Evaluation</h3>
                <p>
                After completing the environmental analysis the next stage is to design and plan your development strategy
                </p>
            </div>
            <div class="skill-items">
                <img src={icon} className='icon' alt='icon' />
                <span><i class="fa-solid fa-chart-pie" id='icon3'></i></span>
                <h3>Development Planning</h3>
                <p>
                In this phase you will focus on executing the actions plan and evaluating the results after each marketing campaign
                </p>
            </div>
        </div>
    </div>
  )
}

export default Intro
