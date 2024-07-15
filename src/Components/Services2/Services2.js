import React from 'react'
import { useRef, useState,useEffect } from 'react'
import pic5 from '../../assets/details-2-background.jpg'
import '../Services2/Services2.css'
function Services2() {
    const btn = ["Business", "Expertise", "Quality"];
    const [activeTab, setActiveTab] = useState("Business");
    
    const renderTabContent = ()=>{
        switch(activeTab){
            case "Business":
                return(
                    <div className='Business'>
                        <h3>Business Services For Companies</h3>
                        <p>Aria provides the most innovative and customized business services in the industry. Our Services section shows how flexible we are for all types of budgets.</p>
                        <p>Business Development 100%</p>
                        <div class="progress-barFirst" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        <p>Opportunity Spotting 76%</p>
                        <div class="progress-barSecond" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            <p>Online Marketing 90%</p>
                        <div class="progress-barThird" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                )
            case "Expertise":
                return(
                    <div className='Expertise'>
                       <ul className='left-list'>
                            <li class="media">
                                <div class="media-bullet">1</div>
                                <div class="media-body"><strong>High quality</strong> is on top of our list when it comes to the way we deliver the services</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">2</div>
                                <div class="media-body"><strong>Maximum impact</strong> is what we look for in our actions</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">3</div>
                                <div class="media-body"><strong>Quality standards</strong> are important but meant to be exceeded</div>
                            </li>
                        </ul> 
                        <ul className='right-list'>
                            <li class="media">
                                <div class="media-bullet">4</div>
                                <div class="media-body"><strong>We're always looking</strong> for industry leaders to help them win their market position</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">5</div>
                                <div class="media-body"><strong>Evaluation</strong> is a key aspect of this business and important</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">6</div>
                                <div class="media-body"><strong>Ethic</strong> procedures ar alwasy at the base of everything we do</div>
                            </li>
                        </ul>
                    </div>
                )
            case "Quality":
                return(
                    <div className='Quality'>
                         <p><strong>We strive to achieve</strong> 100% customer satisfaction for both types of customers: hiring companies and job seekers. Types of customers: <a class="green" href="#your-link">with huge potential</a></p>
                        <p><strong>Our goal is to help</strong> your company achieve its full potential and establish long term stability for <a class="green" href="#your-link">the stakeholders</a></p>
                        <ul>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">It's easy to get a quotation, just call our office anytime</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">We'll get back to you with an initial estimate soon</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Get ready to see results even after only 30 days</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Ask for a quote and start improving your business</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Just fill out the form and we'll call you right away</div>
                            </li>
                        </ul>
                    </div>
                )
            default:return null
        }
    }
  return (
      <div class="proposition proposition-2">
            <div class="content">
           <div className='btn-box'>
           {btn.map((item, index) => (
                 <button key={index} onClick={()=>{setActiveTab(item)}} id='btn' className={`custon-button ${activeTab===item ? 'active' : " "}`}><i class="fas fa-th"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}</button>
             ))}
           </div>
             <div className='tab'>
                 {renderTabContent()}
            </div>
            </div>
            <img src={pic5}/>
    </div>
  )
}

export default Services2
