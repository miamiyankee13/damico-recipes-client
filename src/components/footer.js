import React from 'react';
import './styles/footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p className="footer__info">Copyright &copy; 2019 Anthony D'Amico</p>
            </footer>
        );
    }
}