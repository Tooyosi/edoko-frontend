import React from 'react'

export default function Logo(props) {
    const { style, ...otherProps } = props;
    return (
        <img loading='lazy' alt="logo"
            src={require('../../assets/images/svgs/Logo.svg').default}
            style={style}
            {...otherProps} />
    )
}
