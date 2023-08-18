import React from 'react'
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
import { Favorite, 
    FavoriteBorder, 
    MoreVert, 
    Share, 
    Comment } from '@mui/icons-material'


function posts() {

    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        N
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings"  >
                        <MoreVert />
                    </IconButton>
                }
                title="Ann Maria"
                subheader="September 14, 2023"
            />
            <CardMedia
                component="img"
                height="16%"
                image="https://avatars.mds.yandex.net/i?id=8006197139486f1b35cd6c5016aea35f54df16be-9652646-images-thumbs&n=13"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
}

export default posts