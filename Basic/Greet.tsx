import React from 'react'
type GreetProps = {
    name: string;
    messageCount?: number
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>
                {props.isLoggedIn ? <span>Welcome, {props.name} {messageCount}</span> : <span>You are not login</span>}
            </h2>
        </div>
    )
}

export default Greet