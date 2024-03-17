import Bill from "./Components/Bill";
import Button from "./Components/Button";
import FriendService from "./Components/FriendService";
import Service from "./Components/Service";
import TotalPay from "./Components/TotalPay";

function App() {
  return(
    <div className="flex flex-col gap-2 items-center py-5">
      <Bill/>
      <Service/>
      <FriendService/>
      <TotalPay/>
      <Button title='Reset'/>
    </div>
  );
}

export default App;
