import React from 'react'
import FacebookLogin from 'react-facebook-login'

const LoginComponent = () => {
    return (
        <div>
            <FacebookLogin
            appId=''
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callBack={responseFacebook}
            />
        </div>
    )
}

const componentClicked = () => alert('Clicked!')
const responseFacebook = () => console.log('response')

export default LoginComponent
