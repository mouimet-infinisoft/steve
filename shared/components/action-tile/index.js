import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

/**
 * Action tile component route to features pages
 */
export const ActionTile = ({ title, description, to, icon, ...props }) => {
  return (
    <Card sx={{ width: 350, height: 120 }} to={to} {...props}>
      <CardActionArea sx={{ width: 350, height: 125, display: "flex", gap: 2 }}>
        <Box
          sx={(theme) => ({
            width: "7.5em",
            backgroundColor: theme.palette.primary.main,
            height: 125,
            overflow: "hidden"
          })}
        >
        {icon}
        </Box>
        <Box flex={1}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

ActionTile.propTypes = {
  /**
   * Is the title on the page
   */
  title: PropTypes.string,
  /**
   * Small description
   */
  description: PropTypes.string,
  /**
   * Where is directed?
   */
  to: PropTypes.string,
  /**
   * Icon content
   */
  icon: PropTypes.ReactNode,
};

