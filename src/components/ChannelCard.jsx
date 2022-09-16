import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/contants';
import { Link } from 'react-router-dom';
const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        boxRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        width: { xs: '356px', md: '320px', xl: '250' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop,
      }}
    
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '200px',
              width: '200px',
              ml: 3.2,
              mr: 3.2,
              border: '1px solid #e3e3e3'

            }}
          
          />
          <Typography
            variant="h6"
            color="purple"
            mt="10px"
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml:'5px' }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocalString}
              Subscribers
            </Typography>
          ) }

        </CardContent>
      </Link>

    </Box>
  )
}

export default ChannelCard