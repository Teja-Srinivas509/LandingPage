import React, { useEffect, useState } from 'react'
import '../About/About.css'
import about from '../../assets/about.jpg'

function About() {
    const[counters,setCounters] = useState([])
    const countersData = [
        { label: 'Happy Users', maxCount: 231 },
        { label: 'Issues Solved', maxCount: 121 },
        { label: 'Good Reviews', maxCount: 159 }
    ];
    useEffect(()=>{
        setCounters(countersData.map(item=>({
            label:item.label,
            counter:0,
            maxCount:item.maxCount
        })))
    const intervals = countersData.map((item,index)=>{
        return setInterval(()=>{
            setCounters(prevCounters=>{
                const updateCounters = [...prevCounters]
                if(updateCounters[index].counter<item.maxCount){
                    updateCounters[index].counter+=1
                }else{
                    clearInterval(intervals[index]);
                }
                return updateCounters;
            })
        },45)
    })
    return () => {
        intervals.forEach(interval => clearInterval(interval));
    };
    },[])
  return (
    <div className='About' id='About'>
        <img src={about}/>
        <div class="content">
            <span class="section-title">ABOUT</span>
            <h3>We're Passionate About Delivering Growth Services</h3>
            <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
            <ul>
                <li>Everything we recommend has direct positive impact</li>
                <li>You will become an important partner of our company</li>
            </ul>
            <div class="start-list-container">
                {counters.map((item,index)=>(
                    <div key={index} className='start-item'>
                        <p className="animate">{item.counter}</p>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
