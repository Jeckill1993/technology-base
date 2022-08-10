import React from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;    // [note1]
    height?: string;
    backgroundColor: string;
    children?: React.ReactNode;
    variant: CardVariant
}

const Card = ({ width, height, children, variant, backgroundColor }: CardProps) => {
    return (
        <div className={variant} style={{ width, height, backgroundColor }}>
            { children /*[note2]*/ }
        </div>
    );
};

export default Card;