import React from 'react'

const FriendService = () => {
    return (
        <div className='flex gap-1 mx-auto'>
          <h2 className='font-semibold'>How did your friend like the Service?</h2>

      <select name="service" id="service" className='outline-none border border-solid border-black bg-gray-500 text-white'>
       <option value="Dissatisfied">Dissatisfied(0%)</option>
       <option value="Okay">It was okay (5%)</option>
       <option value="Good">It was Good(10%)</option>
       <option value="Amazing">Absolutely amazing!(20%)</option>
       </select>
        </div>
       )
}

export default FriendService