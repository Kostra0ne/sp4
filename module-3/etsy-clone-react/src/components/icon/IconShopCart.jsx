import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function IconShopCart() {
    return (
        <div className="shopcart">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
        </div>
    )
}
