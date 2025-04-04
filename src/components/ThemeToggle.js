import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow placement="right">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                borderRadius: '50%',
                width: 40,
                height: 40,
                boxShadow: isDarkMode 
                  ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              {isDarkMode ? (
                <Brightness7Icon sx={{ color: '#f5f5f5' }} />
              ) : (
                <Brightness4Icon sx={{ color: '#333' }} />
              )}
            </IconButton>
          </motion.div>
        </Tooltip>
      </motion.div>
    </Box>
  );
};

export default ThemeToggle; 