import { Stack } from '@mui/material';
import React from 'react';
//import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        {/* <InfinitySpin color="gray" /> */}
        Loading.
    </Stack>
  )
}

export default Loader