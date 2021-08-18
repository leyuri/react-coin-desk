/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StoreHelper from '../util/StoreHelper';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { FETCH_NEWS } from '../actions/index'


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
    button: {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        marginRight: '10px'
    }
}));

const StyledButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        marginRight: '10px',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },

    },
}))(Chip);

function handleClick(event) {
    // event.preventDefault();
    console.info('You clicked a button.');
}


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
                            <StyledButton
                                component="a"
                                href={item.url}
                                label="Go to detail"
                                icon={<HomeIcon fontSize="small" />}
                                onClick={handleClick}
                            />
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
        // <List className={classes.root}>
        //     {stores.map((news, index) => {
        //         return <NewsItem key={index} news={news} />
        //     })}
        // </List>
        // <div>
        //     test
        // </div>
        <div>
            <button onClick={FETCH_NEWS}>
                test
            </button>
        </div>

    )
}

export default NewsList;