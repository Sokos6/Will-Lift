import React, { Component } from 'react';
import { DataTypes } from "../data/Types";

export class DataGetter extends Component {
    render() {
        return <React.Fragment>{ this.props.children }</React.Fragment>
    }
    componentDidUpdate = () => this.getData();
    componentDidMount = () => this.getData();
    getData = () => {
        const dsData = this.props.products_params || {};
        const rtData = {
            _limit: this.props.pageSize || 5,
            _sort: this.props.sortKey || "name",
            category_like: (this.props.match.params.category || "") === "all"
            ? "" : this.props.match.params.category
        }
    }
}