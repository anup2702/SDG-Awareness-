import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About the Sustainable Development Goals
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          What are the SDGs?
        </Typography>
        <Typography paragraph>
          The Sustainable Development Goals (SDGs) are a collection of 17 interlinked global goals designed to be a "blueprint to achieve a better and more sustainable future for all". The SDGs were set up in 2015 by the United Nations General Assembly and are intended to be achieved by the year 2030.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Why are the SDGs Important?
              </Typography>
              <Typography paragraph>
                The SDGs are important because they:
              </Typography>
              <ul>
                <li>
                  <Typography paragraph>
                    Address the global challenges we face, including those related to poverty, inequality, climate change, environmental degradation, peace and justice.
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Provide a shared blueprint for peace and prosperity for people and the planet, now and into the future.
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Represent an urgent call for action by all countries - developed and developing - in a global partnership.
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                How Can You Help?
              </Typography>
              <Typography paragraph>
                Everyone can contribute to achieving the SDGs. Here are some ways you can help:
              </Typography>
              <ul>
                <li>
                  <Typography paragraph>
                    Educate yourself and others about the SDGs
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Support organizations working towards these goals
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Make sustainable choices in your daily life
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Advocate for change in your community
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          This application was created to raise awareness about the United Nations Sustainable Development Goals and to help people understand their importance in creating a better world for all.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 