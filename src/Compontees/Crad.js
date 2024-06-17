import React from 'react';

const cardStyles = {
    card: {
        width: '100%', 
        height: '100%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        margin: '-50px 40px 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        textDecoration: 'none', 
        position: 'relative', 
        backgroundColor: '#fff', 
        zIndex: '1', 
        transition: 'transform 0.3s ease-in-out', 
        borderRadius: '8px', 
        padding: '10px' 
    },
    cardImage: {
        borderRadius: '8px 8px 0 0', 
        width: '100%',
        height: '60%', 
        objectFit: 'cover', 
        border: '10px solid #fff', 
        borderBottom: 'none', 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' 
    },
    cardBody: {
        padding: '20px'
    },
    cardTitle: {
        fontSize: '1rem', 
        marginBottom: '5px' 
    },
    cardText: {
        fontSize: '0.9rem', 
        color: 'orange', 
        marginRight: '5px', 
        paddingRight: '2px' 
    }
};

const Card = ({ imageUrl, title, price, onClick }) => {
    return (
        <div className="card" style={{ ...cardStyles.card }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt="Placeholder"
                style={cardStyles.cardImage}
                onClick={onClick} 
            />
            <div className="card-body" style={cardStyles.cardBody}>
                <h5 className="card-title" style={cardStyles.cardTitle}>{title}</h5>
                <p className="card-text" style={cardStyles.cardText}>$ {price}</p>
            </div>
        </div>
    );
};

export default Card;
