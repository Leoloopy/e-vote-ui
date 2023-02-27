import "./createAccount.styles.scss";
const CreateAccount = () => {

    return(
        <>
            <div className="register">
                <div className="register_container">
                    <h1>Create Account</h1>
                    <form className="register_form">

                        <input type="file" accept="image/*" multiple = {false} />

                        <input type="text" placeholder="First Name"/>
                        
                        <input type="text" placeholder="Last Name"/>
                        
                        <input type="text" placeholder="+234 7053642897"/>
                        
                        <input type="password" placeholder="peterObi"/>
                        
                        <input type="text" placeholder="VoteWise.ng"/>
                        <select>
                            <option>Marketing</option>
                            <option>IT</option>
                            <option>Networking</option>
                            <option>Account</option>
                            <option>Sales</option>
                        </select>
                        <button>Create Account</button>
                    </form>
                </div>
            </div>       
        </>
    )

}

export default CreateAccount;