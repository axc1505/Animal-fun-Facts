import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img 
                      className='background'
                      alt='ocean'
                      src='/images/ocean.jpg' />;
const title = '';
const images = [];

const displayFact = e => {
  return e.facts[Math.floor(Math.random()*e.facts.length)]
}

for(const animal in animals){
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact(animals[animal])}
     />
  )
}
const animalFacts = (
  <div>
  
 <h1>{title === '' ? 'Click an animal for a fun fact' : title }</h1>
 {background}
 <div className='animals'>
  {images}
 </div>
 <p id='fact'>
  {displayFact(animals.dolphin)}
  </p>
   </div>
   )
 ;


ReactDOM.render(animalFacts, document.getElementById('root'))
