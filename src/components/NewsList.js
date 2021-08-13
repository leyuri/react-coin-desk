import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
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
                            {/* {item.tags} */}
                            {item.url}
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