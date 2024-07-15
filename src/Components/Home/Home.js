import React, { useEffect, useState } from 'react'
import '../Home/Home.css'

function Home() {
  const [title,setTitle] = useState("Services")
  const titles=["Services","Solutions","Templates"]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % titles.length; 
        setTitle(titles[newIndex]);
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='Home'>
      <div className='content'>
            <h1>Business {title} </h1>
            <p>Aria is top consultancy company specalising in business growth using online marketing
                and conversion optimization techniques
            </p>
            <button>Discover</button>
        </div>
    </div>
  )
}

export default Home
