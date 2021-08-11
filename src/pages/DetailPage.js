import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TopNavBar from '../components/TopNavBar'
import Container from '@material-ui/core/Container';

import CoinChart from '../components/CoinChart';
import CoinInfo from '../components/CoinInfo';
import CoinNews from '../components/CoinNews';
import CoinPriceStatus from '../components/CoinPriceStatus';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function DetailPage() {
    const classes = useStyles();

    return (
        <div >
            <TopNavBar />
            <Container>
                <Grid style={{ marginTop: '15px'}}container spacing={4}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CoinInfo />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Paper className={classes.paper}>
                            <CoinChart />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <CoinPriceStatus />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CoinNews />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
