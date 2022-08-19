import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MentorList() {
  const theme = useTheme();

  return (
    <div>
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="">
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
        {/* <Card> */}
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=116&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
          alt="Live from space album cover"
        />
      </Card>
      <Card sx={{ display: "flex", width: "35%" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        {/* <Card> */}
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=116&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}
