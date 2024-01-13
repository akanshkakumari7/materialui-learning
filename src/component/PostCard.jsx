import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import React from "react";

// Function to create styles object
const createStyles = () => ({
  card: {
    display: "flex",
    background:'#383434'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },

});

const PostCard = ({ post }) => {
  // Call the function to get the styles object
  const styles = createStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="http://naturesblog.blogspot.com/">
        <Card style={styles.card}>
          <div style={styles.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia  style={styles.cardMedia} image={post.image} title={post.image}/>

          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
