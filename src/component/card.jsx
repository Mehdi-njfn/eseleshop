import React from 'react';


const Card = (props) => {
  const {id, title, price , price2, src} = props.data;
  return (
    
      <div className="card flex content-center h-fit  mr-12">
        <img className='w-[150px] h-auto mx-auto' src={src} alt="" />
        <span className=' font-bold'>{title}</span>
        <span>{price}$</span>
        <span className=' line-through decoration-red-600 text-[#a4a4a4dd]'>{price2}$</span>
      </div>
  )
}
 
export default Card;