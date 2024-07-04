import { Box, Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import MyFeed from "./components/MyFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000",color:"#fff"}} >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<MyFeed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
