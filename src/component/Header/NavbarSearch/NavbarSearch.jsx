import React, {Component} from 'react';
import styles from './NavbarSearch.module.scss';

class NavbarSearch extends Component {
    state = {
        inputValue: '',
    };

    handlerSearch = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    };

    render() {

        return (
            <form className={styles.navbar__form}>
                <input type="text"
                       className={styles.bg__search}
                       onChange={this.handlerSearch}
                       value={this.state.inputValue}
                />
                <button type="submit" className={styles.btn__submit}>
                    <i className="fa fa-search" aria-hidden="true">
                    </i>
                </button>
            </form>
        );
    }
}

export default NavbarSearch;