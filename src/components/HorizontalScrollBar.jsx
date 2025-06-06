import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart,isBodyParts }) => {
    return (
        <ScrollMenu 
            LeftArrow={<LeftArrow />} 
            RightArrow={<RightArrow />} 
            scrollContainerClassName="scroll-container" // 👈 Added class for styling
        >
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    className="box-item"  // 👈 Added class to apply CSS styles
                    sx={{ margin: '0 40px' }}
                >
                    {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />:<ExerciseCard exercise={item}/>}
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollBar;
