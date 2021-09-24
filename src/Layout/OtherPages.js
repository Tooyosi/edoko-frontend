import React from 'react'
import TransparentHeader from '../components/common/TransparentHeader'

export default function OtherPagesLayout({children, ...props}) {
    return (
        <>
          <TransparentHeader />  
          {children}
        </>
    )
}
