import PageHeader from "../components/PageHeader";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader title="About Page" />
      <Grid container spacing={5}>
        <Grid item md={8} xs={12} alignSelf="center" sx={{ fontSize: "44px" }}>
          This is my first react app, developed with React, and a lot of helper
          libraries. Here you can see Cards created by students of HackerU,
          create users, like cards, delete and edit your cards and more.{" "}
        </Grid>
        <Grid
          item
          md={4}
          l={12}
          alignSelf="center"
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
