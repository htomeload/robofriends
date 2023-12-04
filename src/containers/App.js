import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event?.target?.value)
    }

    if (!robots?.length) {
        return (<div className="tc">
            <h1 className="f1">Loading...</h1>
        </div>)
    }

    const filteredRobots = robots?.filter(robot => robot?.name?.toLocaleLowerCase()?.includes(searchfield?.toLocaleLowerCase()))

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
            <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    )
}

export default App;