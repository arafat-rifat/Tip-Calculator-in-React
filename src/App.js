import { useState } from "react";
import Bill from "./Components/Bill";
import Button from "./Components/Button";
import FriendService from "./Components/FriendService";
import Service from "./Components/Service";
import TotalPay from "./Components/TotalPay";

function App() {
 const [bill , setBill] = useState('')
 const [serviceTip , setServiceTip] = useState(0);
 const [friendServiceTip , setFriendServiceTip] = useState(0);
 const avgTip = bill * ((serviceTip + friendServiceTip) / 2 / 100 );
 const TotalBill = (bill + avgTip)
  return(
    <div className="flex flex-col gap-2 items-center py-5">
      <Bill bill={bill} setBill = {setBill}/>
      <Service onService ={serviceTip} onSetService = {setServiceTip}/>
      <FriendService onfriendServiceTip={friendServiceTip} onsetFriendServiceTip = {setFriendServiceTip}/>
      {
        bill > 0 && <TotalPay bill={bill} totalBill={TotalBill} onAvgTip ={avgTip}/>
      }
      <Button title='Reset' onSetBill ={setBill} onSetServiceTip={setServiceTip} on SetFriendServiceTip={ setFriendServiceTip}/>
    </div>
  );
}

export default App;
