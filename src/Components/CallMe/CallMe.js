import React from 'react'
import './CallMe.css'

function CallMe() {
  return (
    <div  className='CallMe' id='CallMe'>
        <div class="content">
            <span class="section-title">CALL ME</span>
            <h3>Have Us Contact You By Filling And Submitting The Form</h3>
            <p>You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a call to help you decide what service package works.</p>
            <ul>
                <li>It's very easy just fill in the form so we can call</li>
                <li>During the call we'll require some info about the company</li>
                <li>Don't hesitate to email us for any questions or inquiries</li>
            </ul>
        </div>
        <div class="form">
           <form>
            <input type="text" name="name" placeholder="Your name"/>
            <input type="email" name="email" placeholder="Your email"/>
            <input type="text" name="phone" placeholder="Your phone"/>
            <select name="plan">
                <option disabled selected>Choose your service</option>
                <option value="Choose your service">Choose your service</option>
                <option value="Choose your service">Choose your service</option>
                <option value="Choose your service">Choose your service</option>
                <option value="Choose your service">Choose your service</option>
            </select>
          
            <button type="submit">Call me</button>
           </form>
        </div>
    </div>
  )
}

export default CallMe
