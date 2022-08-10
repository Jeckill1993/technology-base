import React from 'react';
import Card, {CardVariant} from "./components/Card";
import InfoBoard from "./components/InfoBoard";

const App = () => {
    return (
        <div>
            <InfoBoard>
                <h1>Title</h1>
                <h3>SubTitle</h3>
            </InfoBoard>
            <Card width={'200px'} height={'200px'} backgroundColor={'gray'} variant={CardVariant.outlined}>
                <h3>Title</h3>
                <button>Click</button>  { /*[note2]*/ }
            </Card>
        </div>
    );
};

export default App;