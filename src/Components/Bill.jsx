import React from 'react'

const Bill = ({setBill,bill}) => {
  return (
   <div className='flex gap-1 mx-auto'>
     <h2 className='font-semibold'>How Much was the bill?</h2>
     <input type='number' className='px-2 border border-solid border-black outline-none'
     value={bill}
     onChange = {e => setBill(Number(e.target.value))}
     />
   </div>
  )
}

export default Bill