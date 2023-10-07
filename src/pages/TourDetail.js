import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageAblum from "../components/ImageAblum";
import Accordion from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";
import cities from "../data.json";
import { useParams } from "react-router-dom";

const TourDetail = () => {
  let { id } = useParams();
  const tours = [];
  cities.map((city) => city.tours.forEach((tour) => tours.push(tour)));

  return (
    <Container sx={{ width: 900, marginBottom: "5rem" }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in {id <= 4 ? "Niagra Falls" : "Vegas"}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={tours[id - 1].image} alt="" height={325} width={520} />
        <ImageAblum />
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3}>
          Explore the World in {id <= 4 ? "Niagra Falls" : "Vegas"}
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel
          quisquam tempore nisi, vitae totam tempora? Magni doloribus iusto
          exercitationem blanditiis incidunt, maiores magnam accusamus illum
          tenetur vel deleniti error. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repellat laboriosam maxime aut ullam perferendis
          debitis recusandae assumenda maiores? A voluptas minus reiciendis
          blanditiis qui, veniam cum recusandae iusto vero quaerat.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3} marginBottom={3}>
          Frequently asked questions
        </Typography>
        <Accordion />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default TourDetail;
