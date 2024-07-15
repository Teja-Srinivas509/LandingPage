import React, { useRef, useState,useEffect } from 'react'
import '../Services/Services.css'
import pic1 from '../../assets/services-1.jpg'
import pic2 from '../../assets/services-2.jpg'
import pic3 from '../../assets/services-3.jpg'
import pic4 from '../../assets/details-1-background.jpg'
import Accordion from '../Accordion/Accordion'
import downArrow from '../../assets/down-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'
import testimonial1 from '../../assets/testimonial-1.jpg'
import testimonial2 from '../../assets/testimonial-2.jpg'
import testimonial3 from '../../assets/testimonial-3.jpg'
import testimonial4 from '../../assets/testimonial-4.jpg'
import testimonial5 from '../../assets/testimonial-5.jpg'
import testimonial6 from '../../assets/testimonial-6.jpg'
import Services2 from '../Services2/Services2'

function Services() {
    const[visited,setVisited] = useState(false)
   
    const imgContainerRef = useRef(null)

    const next = () => {
        if (imgContainerRef.current.scrollLeft + imgContainerRef.current.clientWidth >= imgContainerRef.current.scrollWidth) {
            imgContainerRef.current.scrollLeft = 0;
        } else {
            imgContainerRef.current.scrollLeft += 300;
        }
    };

    const prev = () => {
        if (imgContainerRef.current.scrollLeft<=0) {
            imgContainerRef.current.scrollLeft = 
            imgContainerRef.current.scrollWidth-imgContainerRef.current.clientWidth
        } else {
            imgContainerRef.current.scrollLeft -= 300;
        }
    };
    useEffect(() => {
        const interval = setInterval(next, 2000);
        return () => clearInterval(interval); 
    }, []);
  return (
    <div className='Services' id='Services'>
        <p className='section-title'>Services</p>
        <h2>Choose The Service Package
        That Suits Your Needs</h2>
        <div class="service-list-conatiner">
            <div class="service-item">
               <img src={pic1}/>
               <div className='service-item-body'>
                <h3>Off The Ground Off The Ground
                </h3>
                <p>
                Perfect for fresh ideas or young startups, this package will help get the business off the ground
                </p>
                <ul>
                    <li>Environment and competition</li>
                    <li>
                    Designing the marketing plan</li>
                </ul>
                <h6>Starting at $199</h6>
                <button>Details</button>
               </div>
            </div>
            <div class="service-item">
                <img src={pic2}/>
                <div className='service-item-body'>
                <h3>Off The Ground Off The Ground
                </h3>
                <p>
                Perfect for fresh ideas or young startups, this package will help get the business off the ground
                </p>
                <ul>
                    <li>Environment and competition</li>
                    <li>
                    Designing the marketing plan</li>
                </ul>
                <h6>Starting at $199</h6>
                <button>Button</button>
                </div>
                </div>
                <div class="service-item">
                <img src={pic3}/>
                <div className='service-item-body'>
                <h3>Off The Ground Off The Ground
                </h3>
                <p>
                Perfect for fresh ideas or young startups, this package will help get the business off the ground
                </p>
                <ul>
                    <li>Environment and competition</li>
                    <li>
                    Designing the marketing plan</li>
                </ul>
                <h6>Starting at $199</h6>
                <button>Button</button>
                </div>
                </div>
            </div>
        <div class="proposition proposition-1">
            <img  src={pic4}/>
            <div class="content">
                <h3>Accelerate Business Growth To Improve Revenue Numbers</h3>
                <Accordion/>
            </div>
        </div>
        <Services2/>
        <div class="testimonial">
            <h3>Read Our Customer Testimonials</h3>
            <p>Our clients are our partners and we can not imagine a better future for our company without helping them reach their objectives</p>
            <div className='gallery-wrap'>
           <img src={downArrow} id='left-btn' onClick={prev}/>
                <div className='gallery' ref={imgContainerRef}>
                        <div className='card'>
                            <img src={testimonial1} />
                            <p>Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</p>
                            <p class="testimonial-author">Lindsay Rune - Manager</p>
                        </div>
                       <div className='card'>
                            <img src={testimonial2} />
                            <p>The guys from Aria helped with getting my business off the ground and turning into a profitable company.</p>
                            <p class="testimonial-author">Lindsay Rune - Manager</p>
                       </div>
                       <div className='card'>
                            <img src={testimonial3} />
                            <p>I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</p>
                            <p class="testimonial-author">Ann Black - Consultant</p>
                       </div>
                       <div className='card'>
                            <img src={testimonial4} />
                            <p>I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</p>
                            <p class="testimonial-author">Lindsay Rune - Manager</p>
                       </div>
                       <div className='card'>
                            <img src={testimonial5} />
                            <p>I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</p>
                            <p class="testimonial-author">Lindsay Rune - Manager</p>
                       </div>
                       <div className='card'>
                            <img src={testimonial6} />
                            <p>I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</p>
                            <p class="testimonial-author">Ann Black - Consultant</p>
                       </div>
                </div>
                <img src={upArrow} id='right-btn' onClick={next}/>
            </div>
        </div>
    </div>
  )
}

export default Services
