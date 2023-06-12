import React from 'react'

export default function FeatureCard(props) {
    return (
        <div className="card border-success" style={props.style}>
            <img src={props.image} style={props.styleImg} className="card-img-top mt-1 img-fluid" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}
