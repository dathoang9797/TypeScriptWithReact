import React from 'react'
import Login from 'components/LearnTypeScriptWithReact/Auth/Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}



const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    return isLoggedIn ? <Component name="Dat" /> : <Login />
}

export default Private