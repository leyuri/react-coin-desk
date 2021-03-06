import React from 'react'
import TopNavBar from '../components/TopNavBar'
import Container from '@material-ui/core/Container';
import CoinList from '../components/CoinList';

const MainPage = () => {
    return (
        <div>
            <TopNavBar />
            <Container>
                <CoinList className="mt-5" />
            </Container>
        </div>
    )
};
export default MainPage;
