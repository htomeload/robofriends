import React from "react";

class SearchBox extends React.Component {
    render() {
        const { searchfield, searchChange } = this.props;

        return (<div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={searchChange} value={searchfield} />
        </div>)
    }
}

export default SearchBox;