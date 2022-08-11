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
    variant: CardVariant;
    clickHandler: () => void // what returns, void | string | object etc
}

const Card = ({ width, height, children, variant, backgroundColor, clickHandler }: CardProps) => {
    return (
        <div className={variant} style={{ width, height, backgroundColor }} onClick={() => { clickHandler() }}>
            { children /*[note2]*/ }
        </div>
    );
};

export default Card;