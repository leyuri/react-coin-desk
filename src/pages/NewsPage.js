import React from 'react'
import TopNavBar from '../components/TopNavBar'
import Container from '@material-ui/core/Container';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    return (
        <div>
            <TopNavBar />
            <Container>
                <NewsList />
            </Container>
        </div>
    )
};
export default NewsPage;
