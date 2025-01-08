import React from 'react'

export default function Alert(props) {

    const Capitalize = (str) => {
        let lower = str.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div >
        {props.alert && <div>
            <div class={`alert alert-${props.alert.type} `} role="alert">
                <strong>{Capitalize(props.alert.type)}! </strong> {props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
