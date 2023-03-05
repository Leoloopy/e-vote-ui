import "./createAccount.styles.scss";
// import { useState } from "react";
import { motion } from "framer-motion";
import PageContainer from "../../reusables/pageContainer.component";
const CreateAccount = () => {
    return (
      <>
        <PageContainer>
          <motion.div
            className="register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="register_container">
              <h1>Create Account</h1>
              <form className="register_form">
                <input type="file" accept="image/*" multiple={false} required />

                <input type="text" placeholder="First Name" required />

                <input type="text" placeholder="Last Name" required />

                <input type="text" placeholder="+234 7053642897" required />

                <input type="password" placeholder="peterObi" required />

                <input type="text" placeholder="VoteWise.ng" required />
                <select required>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Networking</option>
                  <option>Account</option>
                  <option>Sales</option>
                </select>
                <button>Create Account</button>
              </form>
            </div>
          </motion.div>
        </PageContainer>
      </>
    );

}

export default CreateAccount;