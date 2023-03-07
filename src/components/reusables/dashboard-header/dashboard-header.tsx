import "./dashboard-header.scss";

export type HeaderInfo = {
    cohortName:string
    username:string
    image:string
    token:string
}



const DashboardHeader = (props:HeaderInfo) => {

    return (
      <div className="dashboard-header">
              <div className="dashboard-title">
                <div>
                  <h2>Semicolon Votes</h2>
                  <p>{props.cohortName}</p>
                </div>
              </div>

              <div className="profile-header">
                <span>
                  <strong>Welcome</strong>, {props.username}
                </span>
                <div className="profile-pics_small">
                  <img src = {props.image}  alt="profile-pics"/>
                </div>
              </div>
     </div> 

    );
}

export default DashboardHeader;