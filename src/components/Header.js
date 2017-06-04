import React from 'react';
import { func } from 'prop-types';

function Header(props) {
    const {
        openGenerator,
        openValidator,
    } = props;

    return (
        <div className="ninno-header">
            <h1>Norske fødselsnummer</h1>
            <nav>
                <ul className="ninno-nav">
                    <li className="ninno-nav__item">
                        <button
                            className="ninno-nav__button"
                            onClick={openValidator}
                        >
                            Validering av fødselsnummer
                        </button>
                    </li>
                    <li className="ninno-nav__item">
                        <button
                            className="ninno-nav__button"
                            onClick={openGenerator}
                        >
                            Generering av fødselsnummer
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

Header.propTypes = {
    openGenerator: func.isRequired,
    openValidator: func.isRequired,
};

export default Header;
