/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import StoreHelper from '../util/StoreHelper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '35px',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        marginRight: '10px'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: '20px'
    },
    link: {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        marginRight: '10px'
    }
}));

const NewsItem = ({ news }) => {
    const classes = useStyles();
    const { Data } = news;
    const { color } = StoreHelper(news);
    return (
        <div>
            {Data.map(item => <ListItem key={item.id}>
                <ListItemAvatar>
                    <Avatar className={classes.large} src={item.imageurl} >
                    </Avatar>
                </ListItemAvatar>
                {/* <ListItemText primary={item.title} secondary={item.categories} /> */}
                <ListItemText
                    primary={item.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {item.categories}
                            </Typography>
                            <span style={{ color }}>
                                {item.published_on}
                            </span>
                            <br></br>
                            <div>
                                <Link href={item.url} className={classes.link} color="inherit">
                                    Go to detail
                                </Link>
                            </div>
                        </React.Fragment>
                    }
                />
            </ListItem>)}
        </div>
    )
}

const NewsList = () => {
    const stores = useSelector((state) => state.stores)
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {stores.map((news, index) => {
                return <NewsItem key={index} news={news} />
            })}
        </List>
    )
}

export default NewsList;