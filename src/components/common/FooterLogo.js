import React from 'react'

export default function FooterLogo(props) {
    const { style, ...otherProps } = props;
    return (
        <img loading='lazy' alt="logo"
            src={require('../../assets/images/svgs/FooterLogo.svg').default}
            style={style}
            {...otherProps} />
    )
}
