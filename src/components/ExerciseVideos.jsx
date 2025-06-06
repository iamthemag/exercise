import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ExerciseVideos = ({ exerciseVideos,name}) => {
  // if (!exerciseVideos.length) return <Loader />;
  console.log("ehldsjnk");
  console.log(exerciseVideos);
  return (
        <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
      <Typography variant='h4' mb="33px">
        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}} >{name}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection:{lg:'row'},
          gap:{lg:'35px',xs:'0'},
        }}>
          {exerciseVideos?.slice(0, 6).map((item, index) => (
  <a
    key={index}
    className="exercise-video"
    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    target="_blank"
    rel="noreferrer"
  >
    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
    <Box>
      <Typography variant='h6' color='#3A1212'>
        {item.video.title}
      </Typography>
      <Typography variant='h7' color='#000'>
        {item.video.viewCountText}
      </Typography>
    </Box>
  </a>
))}
        </Stack>
    </Box>
  );
};

export default ExerciseVideos;