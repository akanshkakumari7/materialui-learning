import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import Header from "./component/Header";
import "./App.css";
import FeaturedPost from "./component/FeaturedPost";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./component/PostCard";
import SideBar from "./component/SideBar";
import Main from "./component/Main";
import Footer from "./component/Footer";

const createStyles = () => ({
  mainGrid: {
    marginTop:20, 
    
  },
});

function App() {
  const styles = createStyles();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} style={styles.mainGrid}>
          <Main title="From the Firehose" />
          <SideBar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
