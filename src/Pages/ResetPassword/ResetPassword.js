import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    // this function will get email from user and will reserve it to 'email' state
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const actionCodeSettings = {
        url: 'http://localhost:3000/login',
    };
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div>
            <div className="input-fields mx-auto login-div ">
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-field ">
                        <input onBlur={handleEmail} type="text" name="" id="" required />
                        <span className='input-placeholder'>Your Email </span>
                    </div>
                    {/* ------------------ Error message will be shown here ----------------- */}
                    <div className="error-message">
                        <span className='spinner-signup'><Spinner animation="border" variant="primary" /></span>
                        <p></p>
                    </div>
                    <div className="message-button-div login-button-div">
                        <button onClick={async () => {
                            const success = await sendPasswordResetEmail(
                                email,
                                actionCodeSettings
                            );
                            if (success) {
                                alert('Sent email');
                            }
                        }}>Reset Password</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ResetPassword;