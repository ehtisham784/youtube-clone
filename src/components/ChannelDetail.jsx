import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
const ChannelDetail = () => {

  //to access the channelId from the Url
  const [channelDetail, setChannelDetail]=useState(null)
  const [videos, setVideos]=useState([])
  const { id } = useParams();
  console.log(channelDetail);




  useEffect(() => {
    fetchFromAPI(`channels?part="snippet$id={id}`)
      .then((data) => setChannelDetail(data?.items[0]));


    fetchFromAPI(`search?channelId?=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
    // useEffect will trigger whenever the id changes
  },[id])
  
  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(187,14,137,1) 0%, rgba(184,30,30,1) 49%, rgba(24,95,191,1) 100%)',
          zIndex: 10,
          height: '250px'
        }} />

        
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"  />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail

//when using components with styling into another route but want a change then pass that property as a prop in that component