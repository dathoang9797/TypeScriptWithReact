import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'left' | 'center' | 'right'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
}

const Toast = ({ position }: ToastProps) => {
    return (
        <div>Toast</div>
    )
}

export default Toast