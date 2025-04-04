import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import SDGProgress from '../components/SDGProgress';

const sdgDetails = {
  1: {
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    color: "#E5243B",
    targets: [
      "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day",
      "Reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
      "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable"
    ],
    facts: [
      "736 million people still live in extreme poverty",
      "10 percent of the world's population live in extreme poverty, down from 36 percent in 1990",
      "Some 1.3 billion people live in multidimensional poverty",
      "Half of all people living in poverty are under 18"
    ],
    image: "/images/E-WEB-Goal-01.png",
    progress: {
      progress: 65,
      year: 2023,
      target: 2030,
      trend: "increasing",
      data: [
        { year: 2015, value: 10.1 },
        { year: 2016, value: 9.8 },
        { year: 2017, value: 9.3 },
        { year: 2018, value: 8.6 },
        { year: 2019, value: 8.2 },
        { year: 2020, value: 9.3 },
        { year: 2021, value: 8.9 },
        { year: 2022, value: 8.4 },
        { year: 2023, value: 7.9 }
      ]
    }
  },
  2: {
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition",
    color: "#DDA63A",
    targets: [
      "By 2030, end hunger and ensure access by all people to safe, nutritious and sufficient food",
      "End all forms of malnutrition and address the nutritional needs of adolescent girls, pregnant and lactating women",
      "Double the agricultural productivity and incomes of small-scale food producers",
    ],
    facts: [
      "821 million people are undernourished",
      "1 in 9 people in the world are hungry",
      "2 billion people experience moderate or severe food insecurity",
    ],
    image: "/images/E-WEB-Goal-02.png"
  },
  3: {
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all",
    color: "#4C9F38",
    targets: [
      "Reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
      "End preventable deaths of newborns and children under 5 years of age",
      "Achieve universal health coverage and access to quality essential healthcare services",
    ],
    facts: [
      "17,000 fewer children die each day than in 1990",
      "More than 6 million children still die before their fifth birthday each year",
      "Only half of women in developing regions receive the recommended amount of healthcare",
    ],
    image: "/images/E-WEB-Goal-03.png"
  },
  4: {
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education",
    color: "#C5192D",
    targets: [
      "Ensure all girls and boys complete free, equitable and quality primary and secondary education",
      "Ensure equal access to affordable and quality technical, vocational and tertiary education",
      "Increase the number of youth and adults who have relevant skills for employment",
    ],
    facts: [
      "262 million children and youth are out of school",
      "617 million youth worldwide lack basic mathematics and literacy skills",
      "Only 40% of girls in sub-Saharan Africa complete lower secondary school",
    ],
    image: "/images/E-WEB-Goal-04.png"
  },
  5: {
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    color: "#FF3A21",
    targets: [
      "End all forms of discrimination against all women and girls everywhere",
      "Eliminate all forms of violence against all women and girls",
      "Ensure women's full and effective participation and equal opportunities for leadership",
    ],
    facts: [
      "1 in 3 women have experienced physical or sexual violence",
      "Women earn 77 cents for every dollar men earn for work of equal value",
      "Only 24% of national parliamentarians were women as of 2019",
    ],
    image: "/images/E-WEB-Goal-05.png"
  },
  6: {
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water",
    color: "#26BDE2",
    targets: [
      "Achieve universal and equitable access to safe and affordable drinking water",
      "Improve water quality by reducing pollution and eliminating dumping",
      "Increase water-use efficiency and ensure sustainable withdrawals",
    ],
    facts: [
      "2.2 billion people lack access to safely managed drinking water",
      "4.2 billion people lack safely managed sanitation services",
      "80% of wastewater flows back into the ecosystem without being treated",
    ],
    image: "/images/E-WEB-Goal-06.png"
  },
  7: {
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable energy",
    color: "#FCC30B",
    targets: [
      "Ensure universal access to affordable, reliable and modern energy services",
      "Increase substantially the share of renewable energy in the global energy mix",
      "Double the global rate of improvement in energy efficiency",
    ],
    facts: [
      "789 million people lack access to electricity",
      "3 billion people rely on wood, coal, charcoal or animal waste for cooking",
      "Renewable energy accounted for 17.5% of global energy consumption in 2016",
    ],
    image: "/images/E-WEB-Goal-07.png"
  },
  8: {
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth",
    color: "#A21942",
    targets: [
      "Sustain per capita economic growth in accordance with national circumstances",
      "Achieve higher levels of economic productivity through diversification and innovation",
      "Promote development-oriented policies that support productive activities",
    ],
    facts: [
      "5% of adults worldwide are unemployed",
      "61% of workers are in informal employment",
      "Global unemployment is expected to increase by about 2.5 million in 2020",
    ],
    image: "/images/E-WEB-Goal-08.png"
  },
  9: {
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote sustainable industrialization",
    color: "#FD6925",
    targets: [
      "Develop quality, reliable, sustainable and resilient infrastructure",
      "Promote inclusive and sustainable industrialization",
      "Increase the access of small-scale industrial enterprises to financial services",
    ],
    facts: [
      "16% of the global population does not have access to mobile broadband networks",
      "Manufacturing value added per capita is only $100 in the least developed countries",
      "Investment in research and development globally is less than 2% of GDP",
    ],
    image: "/images/E-WEB-Goal-09.png"
  },
  10: {
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    color: "#DD1367",
    targets: [
      "Progressively achieve and sustain income growth of the bottom 40% of the population",
      "Empower and promote the social, economic and political inclusion of all",
      "Ensure equal opportunity and reduce inequalities of outcome",
    ],
    facts: [
      "The richest 10% earn at least 20% of global income",
      "The poorest 40% earn less than 25% of global income",
      "Women earn 77 cents for every dollar men earn for work of equal value",
    ],
    image: "/images/E-WEB-Goal-10.png"
  },
  11: {
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    color: "#FD9D24",
    targets: [
      "Ensure access for all to adequate, safe and affordable housing and basic services",
      "Provide access to safe, affordable, accessible and sustainable transport systems",
      "Strengthen efforts to protect and safeguard the world's cultural and natural heritage",
    ],
    facts: [
      "4.2 billion people live in cities today",
      "828 million people live in slums today",
      "Cities occupy just 3% of the Earth's land but account for 60-80% of energy consumption",
    ],
    image: "/images/E-WEB-Goal-11.png"
  },
  12: {
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    color: "#BF8B2E",
    targets: [
      "Implement the 10-year framework of programmes on sustainable consumption and production",
      "Achieve the sustainable management and efficient use of natural resources",
      "Reduce food losses along production and supply chains",
    ],
    facts: [
      "1.3 billion tonnes of food is wasted every year",
      "If people worldwide switched to energy-efficient lightbulbs, the world would save $120 billion annually",
      "Each year, an estimated 1/3 of all food produced ends up rotting in the bins of consumers and retailers",
    ],
    image: "/images/E-WEB-Goal-12.png"
  },
  13: {
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    color: "#3F7E44",
    targets: [
      "Strengthen resilience and adaptive capacity to climate-related hazards",
      "Integrate climate change measures into national policies and planning",
      "Improve education and awareness-raising on climate change mitigation",
    ],
    facts: [
      "The Earth is now 1.1°C warmer than it was in the 1800s",
      "The last 7 years have been the warmest on record",
      "Global emissions of CO2 have increased by 50% since 1990",
    ],
    image: "/images/E-WEB-Goal-13.png"
  },
  14: {
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources",
    color: "#0A97D9",
    targets: [
      "Prevent and significantly reduce marine pollution of all kinds",
      "Sustainably manage and protect marine and coastal ecosystems",
      "Minimize and address the impacts of ocean acidification",
    ],
    facts: [
      "Oceans cover three quarters of the Earth's surface",
      "3 billion people depend on marine and coastal biodiversity",
      "30% of the world's fish stocks are overexploited",
    ],
    image: "/images/E-WEB-Goal-14.png"
  },
  15: {
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
    color: "#56C02B",
    targets: [
      "Ensure the conservation, restoration and sustainable use of terrestrial ecosystems",
      "Promote the implementation of sustainable management of all types of forests",
      "Combat desertification and restore degraded land and soil",
    ],
    facts: [
      "1.6 billion people depend on forests for their livelihoods",
      "75% of the Earth's land surface is significantly altered by human actions",
      "1 million animal and plant species are threatened with extinction",
    ],
    image: "/images/E-WEB-Goal-15.png"
  },
  16: {
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development",
    color: "#00689D",
    targets: [
      "Significantly reduce all forms of violence and related death rates everywhere",
      "End abuse, exploitation, trafficking and all forms of violence against children",
      "Promote the rule of law at the national and international levels",
    ],
    facts: [
      "68.5 million people have been forcibly displaced as a result of persecution, conflict, or violence",
      "10 million stateless people are denied nationality and basic rights",
      "Corruption, bribery, theft and tax evasion cost developing countries $1.26 trillion per year",
    ],
    image: "/images/E-WEB-Goal-16.png"
  },
  17: {
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the Global Partnership",
    color: "#19486A",
    targets: [
      "Strengthen domestic resource mobilization and international support for developing countries",
      "Enhance international cooperation on and access to science, technology and innovation",
      "Promote the development, transfer, dissemination and diffusion of environmentally sound technologies",
    ],
    facts: [
      "Official development assistance stood at $147.2 billion in 2017",
      "79% of imports from developing countries enter developed countries duty-free",
      "The number of internet users in Africa almost doubled in the past four years",
    ],
    image: "/images/E-WEB-Goal-17.png"
  }
};

const SDGDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const sdg = sdgDetails[id] || {
    title: "SDG Not Found",
    description: "The requested SDG could not be found.",
    targets: [],
    facts: []
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ 
              mb: 4,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.05)',
              }
            }}
          >
            Back to SDGs
          </Button>

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              bgcolor: sdg.color,
              borderRadius: 2,
              mb: 4,
              position: 'relative',
              overflow: 'hidden',
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
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h3" 
                  component="h1" 
                  color="white" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {id}. {sdg.title}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="white" 
                  paragraph
                  sx={{ 
                    opacity: 0.9,
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {sdg.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={sdg.image}
                  alt={sdg.title}
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain',
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    p: 2,
                    borderRadius: 1
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Box sx={{ mb: 4, position: 'relative', zIndex: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Progress Towards 2030 Target
            </Typography>
            <SDGProgress sdgId={parseInt(id)} />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      color: sdg.color,
                      fontWeight: 'bold',
                      mb: 3
                    }}
                  >
                    Key Targets
                  </Typography>
                  <List>
                    {sdg.targets.map((target, index) => (
                      <React.Fragment key={index}>
                        <ListItem>
                          <ListItemText 
                            primary={target}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '1.1rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.primary
                              }
                            }}
                          />
                        </ListItem>
                        {index < sdg.targets.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      color: sdg.color,
                      fontWeight: 'bold',
                      mb: 3
                    }}
                  >
                    Key Facts
                  </Typography>
                  <List>
                    {sdg.facts.map((fact, index) => (
                      <React.Fragment key={index}>
                        <ListItem>
                          <ListItemText 
                            primary={fact}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '1.1rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.primary
                              }
                            }}
                          />
                        </ListItem>
                        {index < sdg.facts.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SDGDetail; 