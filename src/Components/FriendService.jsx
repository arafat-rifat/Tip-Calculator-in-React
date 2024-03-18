import React from 'react'

const FriendService = ({onfriendServiceTip,onsetFriendServiceTip}) => {
    return (
        <div className='flex gap-1 mx-auto'>
          <h2 className='font-semibold'>How did your friend like the Service?</h2>

      <select name="service" id="service" className='outline-none border border-solid border-black bg-gray-500 text-white'
      value={onfriendServiceTip}
      onChange={(e)=>{onsetFriendServiceTip(Number(e.target.value))}}
      >
       <option value="0">Dissatisfied(0%)</option>
       <option value="5">It was okay (5%)</option>
       <option value="10">It was Good(10%)</option>
       <option value="20">Absolutely amazing!(20%)</option>
       </select>
        </div>
       )
}

export default FriendService