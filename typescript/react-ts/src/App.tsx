import React, {useState} from 'react';
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";

import Card, {CardVariant} from "./components/Card";
import InfoBoard from "./components/InfoBoard";
import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";

const App = () => {

    const [isConsoled, setIsConsoled] = useState<boolean>(false);

    const clickHandler = () => {
        console.log(`console type is ${isConsoled}`);
        setIsConsoled(!isConsoled);
    }
    const hoverHandler = (text: string) => {
        console.log(text);
    }

    return (
        <BrowserRouter>
            <nav>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>To Do</NavLink>
            </nav>
            <Routes>
                <Route path={'/users'} element={ <UserPage/> }/>
                <Route path={'/todos'} element={ <TodoPage/> }/>
            </Routes>
            <InfoBoard showTooltip={hoverHandler}>
                <h1>Title</h1>
                <h3>SubTitle</h3>
            </InfoBoard>
            <Card width={'200px'} height={'200px'} backgroundColor={'gray'}
                  variant={CardVariant.outlined} clickHandler={clickHandler}>
                <h3>Title</h3>
                <button>Click</button>  { /*[note2]*/ }
            </Card>

            <EventsExample />
        </BrowserRouter>
    );
};

export default App;