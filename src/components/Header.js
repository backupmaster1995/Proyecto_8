import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Header.module.css"

export default function Header({title}) {
    return (
        <header className={`${styles.header_container}`}>
            <h1 className={`${styles.main_title}`}>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

