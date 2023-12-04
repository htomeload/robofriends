import React from "react";
import Card from "./Card";

class CardList extends React.Component {
    render() {
        const _renderList = [];

        this.props?.robots?.map((item) => _renderList?.push(<Card key={`robot-no-${item?.id}`} {...item} />));

        return _renderList;
    }
}

export default CardList;