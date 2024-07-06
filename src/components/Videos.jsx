import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

function Videos({ videos,direction }) {
  if(!videos?.length) return <Loader/>
  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap={"wrap"}
        justifyContent={"start"}
        gap={3}
      >
        {videos.map((item, idx) => {
          return (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        })}
      </Stack>
    </div>
  );
}

export default Videos;
