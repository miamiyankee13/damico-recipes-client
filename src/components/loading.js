import React from 'react';
import './styles/loading.css';

export default class Loading extends React.Component {
    render() {
        return (
            <div className="loading-container">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}