import "./UserDashBoard.style.scss";
import { FaVoteYea } from "react-icons/fa";
import { GiVote } from "react-icons/gi";
import { MdHowToVote } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from "react-router-dom";
import { HeaderInfo } from "../../reusables/dashboard-header/dashboard-header";
import { useContext } from "react";
import PageContainer from "../../reusables/pageContainer.component";
import DashboardHeader from "../../reusables/dashboard-header/dashboard-header";
import { HeaderContext } from "../../../App";


// export const MyContext:any = createContext(null);

const DashBoard = () => {

  const { headerInfo, setHeaderInfo } = useContext(HeaderContext);


    return (
        <PageContainer>
          <DashboardHeader {...headerInfo} />
          <div className="votes-body">
            <div className="recent-votes">
              <h2> Active Votes</h2>
              <div>
                <GiVote className="GiVote" />
                <span>View all ongoing votes here</span>
              </div>
            </div>

            <div className="active-votes">
              <h2>Recent Votes</h2>
              <div>
                <FaVoteYea className="VoteYea" />
                <span>
                  Click to check history and results of all created or
                  participated votes
                </span>
              </div>
            </div>
          </div>
          <div className="create-poll">
            <Link to="/create-poll" >
              <div>
                <span>
                  <MdHowToVote />
                  <p className="create">Create a poll </p>
                  <p>
                    {" "}
                    <IoIosArrowForward className="arrowFW" />
                  </p>
                </span>
              </div>
            </Link>
          </div>
        </PageContainer>
    );
}

export default DashBoard;

