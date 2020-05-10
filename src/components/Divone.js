import React, {Component} from 'react';
import DivTwo from './divTwo.js';

class DivOne extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <DivTwo />
            </div>
        )
    }
}

export default DivOne;
