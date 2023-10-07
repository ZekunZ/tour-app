import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 12,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={2}>
          <Link href={`/tour/${tour.id}`} underline="none">
            <img className="img" src={tour.image} alt={tour.name}></img>
          </Link>
          <Box paddingX={1}>
            <Link href={`/tour/${tour.id}`} underline="none" color="inherit">
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime
                sx={{
                  width: "1.2rem",
                  marginRight: "0.25rem",
                  marginLeft: "0.1rem",
                }}
              />
              <Typography variant="body2" component="p">
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "0.1rem",
              }}
            >
              <Rating
                name="read-only"
                defaultValue={tour.rating}
                precision={0.5}
                readOnly
              />
              <Typography variant="body3" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
