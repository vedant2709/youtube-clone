import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
  console.log(videos)
  return (
    <div>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"start"}
        gap={5}
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
