import React from 'react';
import './styles/backdrop.css';

export default class Backdrop extends React.Component {
    
    render() {
        return <div  
                    className={this.props.visible ? "backdrop open" : "backdrop" }
                    onClick={this.props.toggleMobileNav}
                >
                </div>
    }
}