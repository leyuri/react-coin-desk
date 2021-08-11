import React from 'react'
import TopNavBar from '../components/TopNavBar'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CoinList from '../components/CoinList';

const MainPage = () => {
    return (
        <div>
            <TopNavBar />
            <Container>
                {/* <Box my={2}>
                    {[...new Array(100)]
                        .map(() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        ).join('\n')}
                </Box> */}
                <CoinList className="mt-5"/>
            </Container>

        </div>
    )
};
export default MainPage;
