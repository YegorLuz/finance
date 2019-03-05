import * as React from 'react';
import Container from '../containers/Container';

class Footer extends React.Component {
    render () {
        return (
            <footer id='footer'>
                <Container>
                    <div className='title'>Cost accounting system</div>
                </Container>
            </footer>
        );
    }
}

export default Footer;