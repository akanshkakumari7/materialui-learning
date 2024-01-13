import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const createStyles = () => ({
  cover: {
    backgroundImage: `url(https://plus.unsplash.com/premium_photo-1669830536955-e28bbde53a26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "white",
  },
});

const FeaturedPost = () => {
  // Call the function to get the styles object
  const styles = createStyles();
  // Function to create styles object
  return (
    <div>
      <Card style={styles.cover}>
        <CardContent style={styles.textContainer}>
          <Typography style={styles.title} gutterBottom>
            Title of a longer featured blog Post
          </Typography>
          <Typography variant="h5">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }} href="https://natureinmind.ie/blog/">
            Read More...
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FeaturedPost;
