import React from 'react';
import { Typography, Link, Paper, Tooltip, useTheme, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const ProfileTab = () => {
  // TODO: Replace with your actual GitHub profile
  const githubUrl = "https://github.com/your-username";
  const theme = useTheme();

  return (
    <Paper
      component={motion.div}
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        bgcolor: theme.palette.background.paper,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: theme.shadows[3],
        zIndex: 1000,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Made with
      </Typography>
      <motion.div
        animate={{ 
          scale: 1.3,
          color: '#ff4081'
        }}
        transition={{ 
          duration: 0.3,
          damping: 10 
        }}
        style={{ cursor: 'pointer' }}
      >
        <motion.div
          animate={{ 
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FavoriteIcon color="error" />
        </motion.div>
      </motion.div>
      <Typography variant="body2" color="text.secondary">
        by
      </Typography>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Tooltip 
          title="View GitHub Profile"
          placement="top"
          arrow
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="body2">
              Your Name
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 0.5,
                borderRadius: '50%',
              }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ 
                  duration: 0.3,
                  damping: 10 
                }}
              >
                <GitHubIcon fontSize="small" />
              </motion.div>
            </Box>
          </Link>
        </Tooltip>
      </motion.div>
    </Paper>
  );
};

export default ProfileTab; 