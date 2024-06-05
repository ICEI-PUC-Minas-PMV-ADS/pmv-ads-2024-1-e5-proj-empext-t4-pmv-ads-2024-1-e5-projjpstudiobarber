import React from 'react';
import styled from 'styled-components/native';

import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
    flex-direction: row;
`;
const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;

export default ({ stars, showNumber }) => {
    const starArray = Array(5).fill(0); // Cria um array com 5 elementos inicializados com zero
    const floorStars = Math.floor(stars);
    const decimalPart = stars - floorStars;

    for (let i = 0; i < floorStars; i++) {
        starArray[i] = 2; // Define as estrelas inteiras como cheias (valor 2)
    }
    if (decimalPart > 0) {
        starArray[floorStars] = 1; // Define a estrela parcial como meia (valor 1)
    }

    return (
        <StarArea>
            {starArray.map((type, index) => (
                <StarView key={index}>
                    {type === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
                    {type === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
                    {type === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}
