import React from 'react';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <span 
            key={index} 
            style={{ 
                color: index < rating ? '#ffd700' : '#ccc',
                fontSize: '18px'
            }}
        >
            ★
        </span>
    ));

    return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
};

export default StarRating;