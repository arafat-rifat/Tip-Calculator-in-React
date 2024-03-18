import React from 'react'

const TotalPay = ({bill,totalBill,onAvgTip}) => {
  return (
    <h2 className='text-2xl font-bold'>You pay ${totalBill} (${bill} + ${onAvgTip} tip)</h2>
  )
}

export default TotalPay;