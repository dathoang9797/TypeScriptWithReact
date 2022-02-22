import React from 'react'
import Greet from 'components/LearnTypeScriptWithReact/Basic/Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    const { isLoggedIn, name, messageCount } = props;
    return (
        <div>{name}</div>
    )
}

export default CustomComponent