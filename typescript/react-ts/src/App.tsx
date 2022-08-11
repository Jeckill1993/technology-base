import React, {useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import InfoBoard from "./components/InfoBoard";
import UserList from "./components/UserList";

const App = () => {

    const [isConsoled, setIsConsoled] = useState(false);

    const users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
            },
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
            },
        },
    ]

    const clickHandler = () => {
        console.log(`console type is ${isConsoled}`);
        setIsConsoled(!isConsoled);
    }

    const hoverHandler = (text: string) => {
        console.log(text);
    }

    return (
        <div>
            <InfoBoard showTooltip={hoverHandler}>
                <h1>Title</h1>
                <h3>SubTitle</h3>
            </InfoBoard>
            <Card width={'200px'} height={'200px'} backgroundColor={'gray'}
                  variant={CardVariant.outlined} clickHandler={clickHandler}>
                <h3>Title</h3>
                <button>Click</button>  { /*[note2]*/ }
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;