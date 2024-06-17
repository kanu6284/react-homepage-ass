import React from 'react';
import Card from './Crad';

const CardContainer = ({ addToCart }) => {
    const cardData = [
        { imageUrl: 'https://uk.gimber.com/cdn/shop/files/GIMBER-N2-BRUT-500ml_1500x1500_crop_center_146b4a3d-ea8b-4170-9d8f-affdbf74094f_250x250_crop_center@2x.jpg?v=1700038080', title: 'GIMBER-500ml', price: '19.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJRXwezk6-tGiywIk8n66_H33QmY8CRsHaQ&s', title: 'GIMBER-600ml', price: '29.99' },
        { imageUrl: 'https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FNRdeg1-Grey-background.jpg%3Fv%3D1685983401?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=1000&q=80&w=1000&s=695c95e7cf86c0ad579a5585453160e9', title: 'Gimblier-700m', price: '64.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88xuEPfxi79rnPHCLNJwNLaP-cDu9Dyc0XWZR8pQi4sDdhUatIVL1eGddccfqkYa5CdA&usqp=CAU', title: 'Product 4', price: '34.99' },
        { imageUrl: 'https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL3.png%3Fv%3D1685976331?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=1000&q=80&w=1000&s=e55a49772bdc5cc224e67b448d38eeea', title: ' Original- 500ml - ', price: '44.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJRXwezk6-tGiywIk8n66_H33QmY8CRsHaQ&s', title: 'GIMBER-200ml', price: '24.99' },
        { imageUrl: 'https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2F4xOriginal-price-fr.png%3Fv%3D1708416443?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=840&q=80&w=840&s=210cab19bbf2528d937556ad34be99c1', title: 'Product 7', price: '74.99' },
        { imageUrl: 'https://assets.trouva.com/image/upload/v1644577316/brand/5c98b398aac7760003c483ba/lmwtwlbgleq5l3vhtp8s.jpg', title: 'Product 8', price: '244.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_ZBeOWmePf_tNjF8Fa1dgAOR-xnxwPDdJIBy8NNh1GJDjnUHuX373TPwTCW607pPSNM&usqp=CAU', title: 'GIMBER-900', price: '54.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhj-PSh3CiaL9gzfl8Wud82VS_mwkYNtM3F0GuK7TXpvzd0RcnkkUQ4N5VsCIz2RMlrY&usqp=CAU', title: 'GIMBER -100', price: '64.99' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGx1sqXqboODqBnMGdHMmbv_a1QFYHHc9fGj29bzRzTvtQC8KvELrwfajbtOz9X2emsY&usqp=CAU', title: 'GIMBER -110', price: '94.99' },
        { imageUrl: 'https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2F4xOriginal-price-fr.png%3Fv%3D1708416443?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=840&q=80&w=840&s=210cab19bbf2528d937556ad34be99c1', title: 'Product 12', price: '84.99' },
    ];

    
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-start">
                {cardData.map((card, index) => (
                    <div className="col mb-4" key={index}>
                        <Card
                            imageUrl={card.imageUrl}
                            title={card.title}
                            price={card.price}
                            onClick={() => addToCart(card.title, card.price)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;