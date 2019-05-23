import React from 'react';

export default class Backdrop extends React.Component {
    
    render() {
        return <div  
                    className={this.props.visible ? "backdrop open" : "backdrop" }
                    onClick={this.props.onClick}
                >
                </div>
    }
}