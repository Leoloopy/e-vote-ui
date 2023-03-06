import React from 'react'
import "./forgotPassword.styles.scss";

const ForgotPassword = () => {
  return (
    <div className="forgot_password">
        <div className="forgot_password_container">
            <form className="forgot_password_form">
                <h3>RESET PASSWORD</h3>
                <label>New Password</label>
                <input type="password" name="newPassword" placeholder="Test123!@#" required/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" required/>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword
