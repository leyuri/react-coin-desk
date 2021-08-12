import React from 'react'
import TopNavBar from '../components/TopNavBar'
import Container from '@material-ui/core/Container';
import ExchangeList from '../components/ExchangeList';

const ExchangesPage = () => {
    return (
        <div>
            <TopNavBar />
            <Container>
                <ExchangeList  />
            </Container>
        </div>
    )
};
export default ExchangesPage;
