import Navbar from "./Navbar/Navbar"
import Chitfunds from "./Chitfunds/Chitfunds"
import PrivateChit from "./PrivateChit"
import "./../css/main-homepage.css"

function Dashboard(){
    return (
        <div className="main-homepage">
            <Navbar></Navbar>
            <PrivateChit ></PrivateChit >
            < Chitfunds></Chitfunds>
           
        </div>
    )
}

export default Dashboard