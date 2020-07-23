import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function IconBurger() {
    return (
        <div className="burger">
            <FontAwesomeIcon size="lg"  className="icon" icon={faBars} />
        </div>
    )
}
