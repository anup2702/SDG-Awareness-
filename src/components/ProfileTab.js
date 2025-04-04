import React, { useState } from 'react';
import { Box, Typography, Link, Paper, Tooltip, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const ProfileTab = () => {
  // TODO: Replace with your actual GitHub profile
  const githubUrl = "https://github.com/your-username";
  const [isHovered, setIsHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(30, 30, 30, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          mt: 2,
          mb: 2,
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
            : '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          border: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'}`,
          '&:hover': {
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 30px rgba(0, 0, 0, 0.4)'
              : '0 8px 30px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-5px)',
          }
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsGitHubHovered(true)}
          onHoverEnd={() => setIsGitHubHovered(false)}
        >
          <Tooltip 
            title="Visit GitHub Profile" 
            arrow 
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                  fontSize: '0.75rem',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }
              }
            }}
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#333',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                p: 0.5,
                borderRadius: '50%',
                bgcolor: isGitHubHovered 
                  ? (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')
                  : 'transparent',
              }}
            >
              <motion.div
                animate={{ 
                  rotate: isGitHubHovered ? 360 : 0,
                  scale: isGitHubHovered ? 1.2 : 1
                }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <GitHubIcon fontSize="small" />
              </motion.div>
            </Link>
          </Tooltip>
        </motion.div>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            fontWeight: 500,
            letterSpacing: 0.5,
            fontSize: '0.85rem'
          }}
        >
          Developed with
        </Typography>
        
        <motion.div
          animate={{ 
            scale: isHovered ? 1.3 : 1,
            color: isHovered ? '#ff4081' : '#e91e63'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 10 
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            animate={{ 
              y: isHovered ? [0, -5, 0] : 0
            }}
            transition={{ 
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <FavoriteIcon fontSize="small" />
          </motion.div>
        </motion.div>
      </Paper>
    </motion.div>
  );
};

export default ProfileTab; 