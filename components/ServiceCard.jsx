import React from "react";
import "../Stylesheets/ServiceCard.css";

export default function ServiceCard({ title, description, color }) {
    return (
        <div className="service-card" style={{ borderTop: `4px solid ${color}` }}>
            <h3 className="service-card-title" style={{ color: color }}>
                {title}
            </h3>
            <p className="service-card-description">
                {description}
            </p>
        </div>
    );
}
