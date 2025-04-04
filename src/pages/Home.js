import React, { useState, useMemo } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Paper, useTheme, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SDGFilter from '../components/SDGFilter';

const sdgData = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    color: "#E5243B",
    image: "/images/E-WEB-Goal-01.png"
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition",
    color: "#DDA63A",
    image: "/images/E-WEB-Goal-02.png"
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all",
    color: "#4C9F38",
    image: "/images/E-WEB-Goal-03.png"
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education",
    color: "#C5192D",
    image: "/images/E-WEB-Goal-04.png"
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    color: "#FF3A21",
    image: "/images/E-WEB-Goal-05.png"
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water",
    color: "#26BDE2",
    image: "/images/E-WEB-Goal-06.png"
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable energy",
    color: "#FCC30B",
    image: "/images/E-WEB-Goal-07.png"
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth",
    color: "#A21942",
    image: "/images/E-WEB-Goal-08.png"
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote sustainable industrialization",
    color: "#FD6925",
    image: "/images/E-WEB-Goal-09.png"
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    color: "#DD1367",
    image: "/images/E-WEB-Goal-10.png"
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    color: "#FD9D24",
    image: "/images/E-WEB-Goal-11.png"
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    color: "#BF8B2E",
    image: "/images/E-WEB-Goal-12.png"
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    color: "#3F7E44",
    image: "/images/E-WEB-Goal-13.png"
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources",
    color: "#0A97D9",
    image: "/images/E-WEB-Goal-14.png"
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
    color: "#56C02B",
    image: "/images/E-WEB-Goal-15.png"
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development",
    color: "#00689D",
    image: "/images/E-WEB-Goal-16.png"
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the Global Partnership",
    color: "#19486A",
    image: "/images/E-WEB-Goal-17.png"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [filters, setFilters] = useState({ searchTerm: '', category: 'all' });

  // Filter SDGs based on search term and category
  const filteredSDGs = useMemo(() => {
    return sdgData.filter(sdg => {
      const matchesSearch = 
        sdg.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        sdg.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      const matchesCategory = 
        filters.category === 'all' || 
        sdg.category === filters.category;
      
      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: theme.palette.mode === 'dark' 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: 4
    }}>
      <Container maxWidth="lg">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4, 
            textAlign: 'center',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)',
              zIndex: 1,
            }
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              mb: 2,
              position: 'relative',
              zIndex: 2
            }}
          >
            Sustainable Development Goals
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              mb: 2,
              position: 'relative',
              zIndex: 2
            }}
          >
            The 17 Goals to Transform Our World
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto',
              position: 'relative',
              zIndex: 2
            }}
          >
            These goals are a call for action by all countries to promote prosperity while protecting the planet.
          </Typography>
        </Paper>

        <SDGFilter onFilterChange={handleFilterChange} />

        {filteredSDGs.length === 0 ? (
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              textAlign: 'center',
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No SDGs match your search criteria. Try adjusting your filters.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {filteredSDGs.map((sdg) => (
              <Grid item xs={12} sm={6} md={4} key={sdg.id}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 4px 6px rgba(0,0,0,0.3)' 
                        : '0 4px 6px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 8px 12px rgba(0,0,0,0.5)' 
                          : '0 8px 12px rgba(0,0,0,0.2)',
                      }
                    }}
                    onClick={() => navigate(`/sdg/${sdg.id}`)}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          p: 2
                        }}
                        image={sdg.image}
                        alt={sdg.title}
                      />
                    </Box>
                    <CardContent 
                      sx={{ 
                        flexGrow: 1, 
                        bgcolor: sdg.color,
                        color: 'white',
                        p: 3,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
                          zIndex: 1,
                        }
                      }}
                    >
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          fontWeight: 'bold',
                          mb: 2,
                          position: 'relative',
                          zIndex: 2,
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        {sdg.id}. {sdg.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          opacity: 0.9,
                          fontSize: '1rem',
                          lineHeight: 1.5,
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {sdg.description}
                      </Typography>
                      
                      {/* Progress indicator */}
                      <Box sx={{ mt: 2, position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" sx={{ color: 'white', opacity: 0.9 }}>
                            Progress
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'white', opacity: 0.9 }}>
                            {Math.floor(Math.random() * 40 + 30)}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={Math.floor(Math.random() * 40 + 30)} 
                          sx={{ 
                            height: 6, 
                            borderRadius: 3,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: 'white',
                              borderRadius: 3
                            }
                          }} 
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home; 