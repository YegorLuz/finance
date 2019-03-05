import * as React from 'react';
import Container from '../containers/Container';

class Header extends React.Component {
    render () {
        return (
            <header id='header'>
                <Container>
                    <div className='title'>Cost accounting system</div>
                </Container>
            </header>
        );
    }
}

export default Header;