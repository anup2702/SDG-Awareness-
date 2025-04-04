import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  InputAdornment, 
  IconButton, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip, 
  Paper,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

const SDGFilter = ({ onFilterChange }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, category });
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    onFilterChange({ searchTerm, category: value });
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setCategory('all');
    onFilterChange({ searchTerm: '', category: 'all' });
  };

  const categories = [
    { value: 'all', label: 'All SDGs' },
    { value: 'social', label: 'Social Development' },
    { value: 'economic', label: 'Economic Growth' },
    { value: 'environmental', label: 'Environmental Protection' },
    { value: 'governance', label: 'Governance & Institutions' }
  ];

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search SDGs..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: searchTerm && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => handleSearchChange({ target: { value: '' } })}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{ 
            flexGrow: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton 
            onClick={() => setShowFilters(!showFilters)}
            color={showFilters ? 'primary' : 'default'}
            sx={{ 
              backgroundColor: showFilters ? theme.palette.primary.light : 'transparent',
              '&:hover': {
                backgroundColor: showFilters ? theme.palette.primary.light : theme.palette.action.hover
              }
            }}
          >
            <FilterListIcon />
          </IconButton>
          
          {(searchTerm || category !== 'all') && (
            <Chip 
              label="Clear Filters" 
              onClick={handleClearFilters} 
              color="primary" 
              variant="outlined"
              size="small"
            />
          )}
        </Box>
      </Box>
      
      {showFilters && (
        <Box sx={{ mt: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              sx={{ borderRadius: 2 }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </Paper>
  );
};

export default SDGFilter; 