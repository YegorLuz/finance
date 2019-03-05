import * as React from 'react';
import Container from '../containers/Container';

class Footer extends React.Component {
    render () {
        return (
            <footer id='footer'>
                <Container>
                    <div className='title'>Система учета затрат</div>
                </Container>
            </footer>
        );
    }
}

export default Footer;