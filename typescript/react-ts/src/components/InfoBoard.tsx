import React, {FC} from 'react';

interface infoBoardProps {
    backgroundColor?: string;
    border?: string;
    children?: React.ReactNode
    showTooltip: (tooltipText: string) => void;
}

const InfoBoard: FC<infoBoardProps> = ({ backgroundColor, border, children,
                                           showTooltip}) => {
    const tooltipText = 'test';

    return (
        <div onMouseOver={() => { showTooltip(tooltipText) }}>
            { children }
        </div>
    );
};

export default InfoBoard;