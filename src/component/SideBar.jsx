import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const createStyles = ()=>({
  sidebarAboutBox:{
    padding:20,
    background:'#383434' 
  },
  sidebarSection: {
    marginTop:30,
  },
});

export default function Sidebar(props) {
    const styles = createStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} style={styles.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom style={styles.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom style={styles.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}