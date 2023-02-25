import "./header.style.scss";

const Header = () => {
    return (
      <>
        <div className="header">
            <div className="Logo">
                SEMICOLON VOTES
            </div>

          <div className="nav-1">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Feature</li>
            </ul>
          </div>

          <div className="nav-2">
            <ul>
                <li className="link-bg">Create Accont</li>
                <li className="link-bg">Sign In</li>
            </ul>
          </div>

        </div>
      </>
    );
}



export default Header;