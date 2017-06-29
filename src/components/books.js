import React from 'react';
import { Link, Route } from 'react-router-dom';
import Nineteen84 from './book_1984';
import HarryPotter from './book_hpy1';
import Stranger from './book_sinsl';

export default () => (
    <div>
        <h2>Books</h2>
        <ul>
            <li>
                <Link to="/books/1984">1984</Link>
            </li>
            <li>
                <Link to="/books/hpy1">Harry Potter: Year 1</Link>
            </li>
            <li>
                <Link to="/books/sinsl">Stranger in a strange land</Link>
            </li>
        </ul>

        <Route path="/books/1984" component={Nineteen84}/>
        <Route path="/books/hpy1" component={HarryPotter}/>
        <Route path="/books/sinsl" component={Stranger}/>
    </div>
)
