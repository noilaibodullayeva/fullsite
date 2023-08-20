import { useEffect, useState } from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from '@mui/material'
import {
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share,
    Comment
} from '@mui/icons-material'
import axios from 'axios';

function posts() {

    const URL = "http://localhost:8998/posts"
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get(URL).then(val => {
        setPosts(val.data)
    })
}, [])
    return (
       <>
       {posts.map((post, index)=>{
        return(
            <Card sx={{ margin: 5 }} key={index}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgColor: "red" }} aria-label="recipe">
                        {post.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings"  >
                        <MoreVert />
                    </IconButton>
                }
                title={post.user}
                subheader={post.date}
            />
            <CardMedia
                component="img"
                height="16%"
                image={post.img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <IconButton aria-label="share">
                    <Comment />
                </IconButton>
            </CardActions>
        </Card>
        )
       })}
       </>
    )
}

export default posts