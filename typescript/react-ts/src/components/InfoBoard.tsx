import React, {FC} from 'react';

interface infoBoardProps {
    backgroundColor?: string;
    border?: string;
    children?: React.ReactNode
}

const InfoBoard: FC<infoBoardProps> = ({ backgroundColor, border, children }) => {
    return (
        <div>
            { children }
        </div>
    );
};

export default InfoBoard;