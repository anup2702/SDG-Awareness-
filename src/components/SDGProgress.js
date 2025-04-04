import React from 'react';
import { Box, Typography, LinearProgress, Paper, useTheme, Tooltip } from '@mui/material';
import { 
  IconButton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

// Sample progress data - in a real app, this would come from an API
const progressData = {
  1: { 
    progress: 65, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
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
  },
  2: { 
    progress: 42, 
    year: 2023, 
    target: 2030,
    trend: 'stagnant',
    data: [
      { year: 2015, value: 8.6 },
      { year: 2016, value: 8.3 },
      { year: 2017, value: 8.1 },
      { year: 2018, value: 8.0 },
      { year: 2019, value: 8.0 },
      { year: 2020, value: 9.3 },
      { year: 2021, value: 9.8 },
      { year: 2022, value: 9.9 },
      { year: 2023, value: 9.9 }
    ]
  },
  3: { 
    progress: 78, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 216 },
      { year: 2016, value: 211 },
      { year: 2017, value: 205 },
      { year: 2018, value: 198 },
      { year: 2019, value: 190 },
      { year: 2020, value: 223 },
      { year: 2021, value: 215 },
      { year: 2022, value: 208 },
      { year: 2023, value: 200 }
    ]
  },
  4: { 
    progress: 55, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 16.0 },
      { year: 2016, value: 15.5 },
      { year: 2017, value: 15.0 },
      { year: 2018, value: 14.5 },
      { year: 2019, value: 14.0 },
      { year: 2020, value: 15.5 },
      { year: 2021, value: 15.0 },
      { year: 2022, value: 14.5 },
      { year: 2023, value: 14.0 }
    ]
  },
  5: { 
    progress: 48, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 0.75 },
      { year: 2016, value: 0.76 },
      { year: 2017, value: 0.77 },
      { year: 2018, value: 0.78 },
      { year: 2019, value: 0.79 },
      { year: 2020, value: 0.80 },
      { year: 2021, value: 0.81 },
      { year: 2022, value: 0.82 },
      { year: 2023, value: 0.83 }
    ]
  },
  6: { 
    progress: 71, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 71 },
      { year: 2016, value: 73 },
      { year: 2017, value: 75 },
      { year: 2018, value: 77 },
      { year: 2019, value: 79 },
      { year: 2020, value: 81 },
      { year: 2021, value: 83 },
      { year: 2022, value: 85 },
      { year: 2023, value: 87 }
    ]
  },
  7: { 
    progress: 63, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 17.5 },
      { year: 2016, value: 18.2 },
      { year: 2017, value: 19.0 },
      { year: 2018, value: 19.8 },
      { year: 2019, value: 20.7 },
      { year: 2020, value: 21.6 },
      { year: 2021, value: 22.5 },
      { year: 2022, value: 23.4 },
      { year: 2023, value: 24.3 }
    ]
  },
  8: { 
    progress: 52, 
    year: 2023, 
    target: 2030,
    trend: 'decreasing',
    data: [
      { year: 2015, value: 5.4 },
      { year: 2016, value: 5.7 },
      { year: 2017, value: 5.6 },
      { year: 2018, value: 5.4 },
      { year: 2019, value: 5.3 },
      { year: 2020, value: 6.5 },
      { year: 2021, value: 6.2 },
      { year: 2022, value: 5.8 },
      { year: 2023, value: 5.5 }
    ]
  },
  9: { 
    progress: 58, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 1.7 },
      { year: 2016, value: 1.8 },
      { year: 2017, value: 1.9 },
      { year: 2018, value: 2.0 },
      { year: 2019, value: 2.1 },
      { year: 2020, value: 2.2 },
      { year: 2021, value: 2.3 },
      { year: 2022, value: 2.4 },
      { year: 2023, value: 2.5 }
    ]
  },
  10: { 
    progress: 45, 
    year: 2023, 
    target: 2030,
    trend: 'stagnant',
    data: [
      { year: 2015, value: 0.31 },
      { year: 2016, value: 0.30 },
      { year: 2017, value: 0.30 },
      { year: 2018, value: 0.29 },
      { year: 2019, value: 0.29 },
      { year: 2020, value: 0.30 },
      { year: 2021, value: 0.30 },
      { year: 2022, value: 0.30 },
      { year: 2023, value: 0.30 }
    ]
  },
  11: { 
    progress: 67, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 23.5 },
      { year: 2016, value: 24.0 },
      { year: 2017, value: 24.5 },
      { year: 2018, value: 25.0 },
      { year: 2019, value: 25.5 },
      { year: 2020, value: 26.0 },
      { year: 2021, value: 26.5 },
      { year: 2022, value: 27.0 },
      { year: 2023, value: 27.5 }
    ]
  },
  12: { 
    progress: 39, 
    year: 2023, 
    target: 2030,
    trend: 'decreasing',
    data: [
      { year: 2015, value: 9.5 },
      { year: 2016, value: 9.3 },
      { year: 2017, value: 9.1 },
      { year: 2018, value: 8.9 },
      { year: 2019, value: 8.7 },
      { year: 2020, value: 8.5 },
      { year: 2021, value: 8.3 },
      { year: 2022, value: 8.1 },
      { year: 2023, value: 7.9 }
    ]
  },
  13: { 
    progress: 33, 
    year: 2023, 
    target: 2030,
    trend: 'decreasing',
    data: [
      { year: 2015, value: 36.7 },
      { year: 2016, value: 36.3 },
      { year: 2017, value: 36.7 },
      { year: 2018, value: 36.9 },
      { year: 2019, value: 36.7 },
      { year: 2020, value: 34.8 },
      { year: 2021, value: 36.3 },
      { year: 2022, value: 36.8 },
      { year: 2023, value: 37.2 }
    ]
  },
  14: { 
    progress: 41, 
    year: 2023, 
    target: 2030,
    trend: 'decreasing',
    data: [
      { year: 2015, value: 31.4 },
      { year: 2016, value: 30.9 },
      { year: 2017, value: 30.4 },
      { year: 2018, value: 29.9 },
      { year: 2019, value: 29.4 },
      { year: 2020, value: 28.9 },
      { year: 2021, value: 28.4 },
      { year: 2022, value: 27.9 },
      { year: 2023, value: 27.4 }
    ]
  },
  15: { 
    progress: 47, 
    year: 2023, 
    target: 2030,
    trend: 'decreasing',
    data: [
      { year: 2015, value: 31.2 },
      { year: 2016, value: 30.8 },
      { year: 2017, value: 30.4 },
      { year: 2018, value: 30.0 },
      { year: 2019, value: 29.6 },
      { year: 2020, value: 29.2 },
      { year: 2021, value: 28.8 },
      { year: 2022, value: 28.4 },
      { year: 2023, value: 28.0 }
    ]
  },
  16: { 
    progress: 59, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 0.45 },
      { year: 2016, value: 0.46 },
      { year: 2017, value: 0.47 },
      { year: 2018, value: 0.48 },
      { year: 2019, value: 0.49 },
      { year: 2020, value: 0.50 },
      { year: 2021, value: 0.51 },
      { year: 2022, value: 0.52 },
      { year: 2023, value: 0.53 }
    ]
  },
  17: { 
    progress: 51, 
    year: 2023, 
    target: 2030,
    trend: 'increasing',
    data: [
      { year: 2015, value: 0.21 },
      { year: 2016, value: 0.22 },
      { year: 2017, value: 0.23 },
      { year: 2018, value: 0.24 },
      { year: 2019, value: 0.25 },
      { year: 2020, value: 0.26 },
      { year: 2021, value: 0.27 },
      { year: 2022, value: 0.28 },
      { year: 2023, value: 0.29 }
    ]
  }
};

const SDGProgress = ({ sdgId }) => {
  const theme = useTheme();
  const data = progressData[sdgId] || {
    progress: 0,
    year: new Date().getFullYear(),
    target: 2030,
    trend: "stagnant",
    data: []
  };
  
  const getProgressColor = (progress) => {
    if (progress >= 80) return theme.palette.success.main;
    if (progress >= 50) return theme.palette.warning.main;
    return theme.palette.error.main;
  };
  
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "increasing":
        return <TrendingUpIcon sx={{ color: theme.palette.success.main }} />;
      case "decreasing":
        return <TrendingDownIcon sx={{ color: theme.palette.error.main }} />;
      default:
        return <TrendingFlatIcon sx={{ color: theme.palette.warning.main }} />;
    }
  };
  
  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(0, 0, 0, 0.02)',
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Current Progress: {data.progress}%
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {getTrendIcon(data.trend)}
          <Tooltip title="Data source: UN Sustainable Development Goals Report 2023">
            <IconButton size="small">
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      
      <LinearProgress 
        variant="determinate" 
        value={data.progress} 
        sx={{ 
          height: 10, 
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: getProgressColor(data.progress),
            borderRadius: 5
          }
        }} 
      />
      
      {/* Simple line chart visualization */}
      {data.data.length > 0 && (
        <Box sx={{ mt: 4, height: 250, position: 'relative', overflow: 'hidden' }}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Progress over time ({data.data[0].year} - {data.data[data.data.length - 1].year})
          </Typography>
          <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 800 300" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Y-axis */}
              <line 
                x1="50" 
                y1="20" 
                x2="50" 
                y2="280" 
                stroke={theme.palette.text.secondary} 
                strokeWidth="1" 
              />
              {/* X-axis */}
              <line 
                x1="50" 
                y1="280" 
                x2="750" 
                y2="280" 
                stroke={theme.palette.text.secondary} 
                strokeWidth="1" 
              />
              
              {/* Y-axis labels */}
              <text x="40" y="280" textAnchor="end" fill={theme.palette.text.secondary} fontSize="12">0%</text>
              <text x="40" y="140" textAnchor="end" fill={theme.palette.text.secondary} fontSize="12">7.5%</text>
              <text x="40" y="20" textAnchor="end" fill={theme.palette.text.secondary} fontSize="12">15%</text>
              
              {/* Data points and lines */}
              {data.data.map((point, index) => {
                const x = 50 + (index / (data.data.length - 1)) * 700;
                const y = 280 - (point.value / 15) * 260; // Scale based on max value
                
                return (
                  <React.Fragment key={point.year}>
                    {/* Data point */}
                    <circle 
                      cx={x} 
                      cy={y} 
                      r="4" 
                      fill={theme.palette.primary.main} 
                    />
                    {/* Year label */}
                    <text 
                      x={x} 
                      y="295" 
                      textAnchor="middle" 
                      fill={theme.palette.text.secondary}
                      fontSize="12"
                    >
                      {point.year}
                    </text>
                    {/* Value label */}
                    <text 
                      x={x} 
                      y={y - 10} 
                      textAnchor="middle" 
                      fill={theme.palette.text.secondary}
                      fontSize="12"
                    >
                      {point.value}%
                    </text>
                    {/* Connecting line */}
                    {index > 0 && (
                      <line 
                        x1={50 + ((index - 1) / (data.data.length - 1)) * 700}
                        y1={280 - (data.data[index - 1].value / 15) * 260}
                        x2={x}
                        y2={y}
                        stroke={theme.palette.primary.main}
                        strokeWidth="2"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </svg>
          </Box>
        </Box>
      )}
      
      <Typography 
        variant="caption" 
        color="text.secondary" 
        sx={{ 
          mt: 2, 
          display: 'block',
          textAlign: 'right'
        }}
      >
        Target year: {data.target}
      </Typography>
    </Paper>
  );
};

export default SDGProgress; 