import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
function Rightbar() {
    return (
        <Box
            flex={2}
            sx={{ display: { xs: "none", sm: "block" }, padding: 10, paddingRight: 16 }}
            p={2}
        >
            <Box position="fixed" width={420}>
                <Typography variant="h6" sx={{ fontWeight: "100", marginTop: "2px", MarginBottom: "2px" }}>
                    Online friend
                </Typography>
                <AvatarGroup max={10} padding={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://avatars.mds.yandex.net/i?id=5a5d97e6bb7e2b983e851cdc14f6f99f9fada87f-8256333-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://avatars.mds.yandex.net/i?id=520d0f99dc09733021a01c78e5d00d37f9401fde-9843030-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://avatars.mds.yandex.net/i?id=46a175285723ff07854d835fac3a49b0f98b51de-9148863-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://avatars.mds.yandex.net/i?id=e7f9036335730aa5565b814c3cf20c273d3cb068-10672158-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://avatars.mds.yandex.net/i?id=4ccbc87a7fb6db372ea2e10c3f68f5a014b44ed3-6493270-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src="https://avatars.mds.yandex.net/i?id=447a827c9b8d2afdd99d6bd5d027c5400c238785-9700166-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src=""
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://avatars.mds.yandex.net/i?id=b986817ad35b5230fcfdc0a5af857f3f8045ccbe-6942344-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://avatars.mds.yandex.net/i?id=0506b145809ab220af0315d02bb5ef9e722361db-7752980-images-thumbs&n=13"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src=""
                    />
                </AvatarGroup>
                <Typography variant="h6" sx={{ fontWeight: "100", padding: "10px", marginTop: "2px", MarginBottom: "2px" }}>
                    Latest photos
                </Typography>
                <ImageList sx={{ padding: "20" }}>
                    <ImageListItem>
                        <img
                            src="https://avatars.mds.yandex.net/i?id=79d79595fac35c36f2a7fb639701c568e725a8c1-5897487-images-thumbs&n=13"
                            alt="img"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://avatars.mds.yandex.net/i?id=027ff5ac6c4248743956f77a0ebee16dc2a0d60c-9181622-images-thumbs&n=13"
                            alt="img"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://avatars.mds.yandex.net/i?id=b09c7b540d5807668996d59bd9bf17913d8bbc2c-8819334-images-thumbs&n=13"
                            alt="img"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://avatars.mds.yandex.net/i?id=2a0000018a0253c6e1a69190d6dd9873dd8b-1221006-fast-images&n=13"
                            alt="img"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" sx={{ fontWeight: "100", padding: "10px", marginTop: "2px" }}>
                    Latest conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=9ede5077e5fb4db629af09207ad9e96a9f58707e-9098551-images-thumbs&n=13" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=669a594418488e4ae4968344f965186f173dba23-9181886-images-thumbs&n=13" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=d31500b610ccd692722fce8a62fe91b9968b221c-9234742-images-thumbs&n=13" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar