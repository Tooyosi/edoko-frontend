import React from 'react'

export default function HiddenSidebar({ show, children, ...props }) {
    return (
        <div className="hiddenSidebar" style={{ marginRight: show ? '0' : '150vw' }}>

            {children}
        </div>
    )
}
