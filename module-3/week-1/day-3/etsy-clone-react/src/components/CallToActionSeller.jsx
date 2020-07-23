import React from 'react';
import source from "./../assets/img/bimBamBoum_V05.jpg";

export default function CallToActionSeller() {
    return (
        <div className="call-to-action-sellers">
            <p>
                <h2 className="title">Devenez l'un de nos benders</h2>
                <a href="/" className="link call-to-actiob">voir maintenant</a>
            </p>
            <img src={source} />
        </div>
    )
}
