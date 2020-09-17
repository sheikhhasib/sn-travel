import React from 'react';
import googleLogo from '../images/Icon/google.png'
import fbLogo from '../images/Icon/fb.png'
const FbAndGmailSignIn = () => {
    const signInBtnStyle = {
        width: '100%',
        border: '1px solid gray' ,
        borderRadius: '20px',
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        marginTop:'10px'
    } 
    return (
        <div className="col-md-3 m-auto">
            <div className="row m-auto">
                <div style={{borderBottom:'1px solid gray',width:'48%'}}></div>
                or
                <div style={{borderBottom:'1px solid gray',width:'48%'}}></div>
            </div>
            <div className="mt-4">
                <button style={signInBtnStyle}><img src={fbLogo} className="float-left py-1" alt=""/> Continue with Facebook</button>
                <button style={signInBtnStyle}><img src={googleLogo} className="float-left py-1" alt=""/>Continue with Google</button>
            </div>
        </div>
    );
};

export default FbAndGmailSignIn;