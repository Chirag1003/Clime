import { Box, Container, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Search from "./Components/Search/Search";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <>
      <Container className={classes.container}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <Box className={classes.top_box}>
              <Typography variant="h6">Clime</Typography>
              <Typography variant="p">Time</Typography>
              <Link
                href="https://github.com/nikhilyadvv"
                target="_blank"
                underline="none"
                sx={{ display: "flex" }}
              >
                <GitHubIcon className={classes.git_icon} />
              </Link>
            </Box>
            <Search onSearchChange={handleOnSearchChange} />
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default App;
