import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


const createStyles = () => ({
  footer: {
    background:"#383434", 
    marginTop: 40,
    padding: 60,
  },
});

export default function Footer({ description, title }) {
  const styles = createStyles();

  return (
    <footer style={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Green Nature
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}