import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.scss'

class NavMenu extends Component {
    render() {
        return (
            <nav>
                <div className='bkgd'>
                    <figure className='background'></figure>
                    <figure className='background-people'></figure>
                </div>
                <div className='logo-wrapper'>
                    <figure></figure>
                </div>
                <ul>
                <li>Quem somos</li>
                <li>Nosso jeito de trabalhar</li>
                <li>
                    <Link to='#section-five'>
                    <button href='#wehire' >We’re hiring</button>
                    </Link>
                </li>
                </ul>

            </nav>
        )
    }
}

export default NavMenu