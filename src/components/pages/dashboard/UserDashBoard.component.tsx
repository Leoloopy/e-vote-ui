import "./UserDashBoard.style.scss";
import UpperWave from "../.../../../../assets/svgs/dashboardBanner.svg";
import { FaVoteYea } from "react-icons/fa";
import { GiVote } from "react-icons/gi";
import { MdHowToVote } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import PageContainer from "../../reusables/pageContainer.component";



const DashBoard = () => {

    return (
      <>
        <PageContainer>
          <div className="dasboardContainer">
            <div className="dashboard-header">
              <div className="dashboard-title">
                <h2>Semicolon Votes</h2>
                <p>Cohort Name</p>
              </div>

              <div className="profile-header">
                <span>
                  <strong>Welcome</strong>, Username
                </span>
                <div className="profile-pics_small"></div>
              </div>
            </div>

            <div className="dashboard-body">
              <div className="votes-body">
                <div className="recent-votes">
                  <h1> Active Votes</h1>
                  <div>
                    <GiVote className="GiVote" />
                    <span>View all ongoing votes here</span>
                  </div>
                </div>

                <div className="active-votes">
                  <h1>Recent Votes</h1>
                  <div>
                    <FaVoteYea className="VoteYea" />
                    <span>
                      Click to check history of all created or participated
                      votes
                    </span>
                  </div>
                </div>
              </div>
              <div className="create-poll">
                <div>
                  <MdHowToVote /> <span>Create a poll </span>
                </div>{" "}
                <IoIosArrowForward className="arrowFW" />
              </div>
              <div className="view-report">
                <div>
                  <TbReportSearch />
                  <span> Closed votes and Reports </span>{" "}
                </div>{" "}
                <IoIosArrowForward className="arrowFW" />
              </div>
            </div>
          </div>
        </PageContainer>
      </>
    );
}

export default DashBoard;

