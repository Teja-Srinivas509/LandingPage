import React, { useState } from 'react'
import '../Projects/Projects.css'
import project1 from '../../assets/project-1.jpg'
import project2 from '../../assets/project-2.jpg'
import project3 from '../../assets/project-3.jpg'
import project4 from '../../assets/project-4.jpg'
import project5 from '../../assets/project-5.jpg'
import project6 from '../../assets/project-6.jpg'
import project7 from '../../assets/project-7.jpg'
import project8 from '../../assets/project-8.jpg'
import team1 from '../../assets/team-1.png'
import team2 from '../../assets/team-2.png'
import team3 from '../../assets/team-3.png'
import team4 from '../../assets/team-4.png'

function Projects() {
    const tab = ["SHOW ALL","DESIGN","DEVELOPMENT","MARKETING","SEO"]
    const [active,setActive] = useState("SHOW ALL")
    const renderContent = ()=>{
        switch(active){
            case "SHOW ALL":
                return(
                    <div className='grid-container'>
                <div className='grid-item'>
                    <img src={project1} /><span>Online Banking</span>
                </div>
                <div className='grid-item'>
                    <img src={project2} /><span>Classic Industry</span>
                </div>
                <div className='grid-item'>
                    <img src={project3} /><span>BoomBap Audio</span>
                </div>
                <div className='grid-item'>
                    <img src={project4} /><span>Van Moose</span>
                </div>
                <div className='grid-item'>
                    <img src={project5} /><span>Joy Moments</span>
                </div>
                <div className='grid-item'>
                    <img src={project6} /><span>Spark Events</span>
                </div>
                <div className='grid-item'>
                    <img src={project7} /><span>Casual Wear</span>
                </div>
                <div className='grid-item'>
                    <img src={project8} /><span>Zazoo Apps</span>
                </div>
            </div>
                )
            case "DESIGN":
                return(
                    <div className='grid-container'>
                <div className='grid-item'>
                    <img src={project1} /><span>Online Banking</span>
                </div>
                <div className='grid-item'>
                    <img src={project2} /><span>Classic Industry</span>
                </div>
                <div className='grid-item'>
                    <img src={project3} /><span>BoomBap Audio</span>
                </div>
                <div className='grid-item'>
                    <img src={project4} /><span>Van Moose</span>
                </div>
                <div className='grid-item'>
                    <img src={project5} /><span>Joy Moments</span>
                </div>
                <div className='grid-item'>
                    <img src={project6} /><span>Spark Events</span>
                </div>
            </div>
                )
            case "DEVELOPMENT":
                return(
                    <div className='grid-container'>
                <div className='grid-item'>
                    <img src={project1} /><span>Online Banking</span>
                </div>
                <div className='grid-item'>
                    <img src={project2} /><span>Classic Industry</span>
                </div>
                <div className='grid-item'>
                    <img src={project3} /><span>BoomBap Audio</span>
                </div>
                <div className='grid-item'>
                    <img src={project4} /><span>Van Moose</span>
                </div>
                <div className='grid-item'>
                    <img src={project5} /><span>Joy Moments</span>
                </div>
            </div>
                )
            case "MARKETING":
                return(
                    <div className='grid-container'>
                <div className='grid-item'>
                    <img src={project4} /><span>Van Moose</span>
                </div>
                <div className='grid-item'>
                    <img src={project5} /><span>Joy Moments</span>
                </div>
                <div className='grid-item'>
                    <img src={project6} /><span>Spark Events</span>
                </div>
                <div className='grid-item'>
                    <img src={project7} /><span>Casual Wear</span>
                </div>
                <div className='grid-item'>
                    <img src={project8} /><span>Zazoo Apps</span>
                </div>
            </div>
                )
            case "SEO":
                return(
                    <div className='grid-container' id='SEO'>
                    <div className='grid-item'>
                        <img src={project4} /><span>Van Moose</span>
                    </div>
                    <div className='grid-item'>
                        <img src={project5} /><span>Joy Moments</span>
                    </div>
                    <div className='grid-item'>
                        <img src={project7} /><span>Van Moose</span>
                    </div>
                </div>
                )
        }
    }
  return (
    <div className='Projects' id='Projects'>
        <p class="section-title">PROJECTS</p>
        <h3>Projects That We're Proud Of</h3>
        <div class="grid">
            <ul>
                {tab.map((item,index)=>(
                    <li><button onClick={()=>{setActive(item)}} className={`present-button ${active===item ? "show" : "} " }`}>{item} </button>&nbsp;&nbsp;</li>
                ))}
            </ul>
            <div className='project-container'>
                {renderContent()}
            </div>
        </div>
        <div class="team">
            <h4>Our Team Of Consultants</h4>
            <p className='team-p'>
            We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies
            </p>
            <div class="team-member-list-container">
                <div class="team-member-list-item">
                    <img src={team1}/>
                    <div className='team-content'>
                    <p className='title'>John Whitelong</p>
                    <p className="job-title">General Manager</p>
                    </div>
                </div>
                <div class="team-member-list-item">
                    <img src={team2}/>
                    <div className='team-content'>
                    <p className='title'>Veronique Smith</p>
                    <p className="job-title">Business Developer</p>
                    </div>
                </div>
                <div class="team-member-list-item">
                    <img src={team3}/>
                    <div className='team-content'>
                    <p className='title'>Chris Zimerman</p>
                    <p className="job-title">Online Marketer</p>
                    </div>
                </div>
                <div class="team-member-list-item">
                    <img src={team4}/>
                    <div className='team-content'>
                    <p className='title'>Mary Villalonga</p>
                    <p className='job-title'>Community Manager</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
