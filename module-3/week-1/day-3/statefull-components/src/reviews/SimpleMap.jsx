import React from 'react'

export default function SimpleMap() {
    const visitors = [
        "visitor 1",
        "visitor 2",
        "visitor 3",
        "visitor 4",
        "visitor 5",
        "visitor 6",
    ];

    const products = [
        "product 1",
        "product 2",
        "product 3",
        "product 4",
        "product 5",
        "product 6",
    ];

    return (
        <>
        <ul>
            {
                visitors.map((value, index) => (
                    <li key={index}>{value}</li>
                ))
            }
        </ul>

        {/* utiliser map pour générer autant de div que de produits */}

        {
            products.map((product, i) => (
                <div key={i}>{product}</div>
            ))
        }
        </>
    )
}
