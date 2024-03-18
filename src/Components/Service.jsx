import React from 'react'

const Service = ({onService,onSetService}) => {
    console.log(onService);
    return (
        <div className='flex gap-1 mx-auto'>
          <h2 className='font-semibold'>How did you like the Service?</h2>

      <select name="service" id="service" className='outline-none border border-solid border-black bg-gray-500 text-white'
      onChange={(e)=>{onSetService(Number(e.target.value))}}
      value={onService}
      >
       <option value="0">Dissatisfied(0%)</option>
       <option value="5">It was okay (5%)</option>
       <option value="10">It was Good(10%)</option>
       <option value="20">Absolutely amazing!(20%)</option>
       </select>
        </div>
       )
}

export default Service