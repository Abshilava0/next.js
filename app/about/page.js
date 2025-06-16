'use client';

import classes from './page.module.css';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useEffect } from "react";

// Custom styled Accordion with black background and white text
const BlackAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#000', // black bg
  color: '#fff', // white text
  border: '1px solid #333',
  '&:before': {
    display: 'none',
  },
}));

const BlackAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#111',
  color: '#fff',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: '#fff',
  },
}));

const BlackAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#222',
  color: '#ddd',
}));

export default function About() {
  useEffect(() => {
    // Hide scrollbars when About page is mounted
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scrollbars when leaving About page
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.aboutMain}>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What Do You Offer?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              This is a black styled accordion with white text.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>What Is Your Return Policy?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              You can customize the colors as you want using MUI’s styled API.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What Is Your Shipping Policy?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              This is a black styled accordion with white text.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What Is Your Warranty Policy?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              This is a black styled accordion with white text.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What can we get?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              This is a black styled accordion with white text.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
        <BlackAccordion className={classes.myAccordion}>
          <BlackAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Where are you located?</Typography>
          </BlackAccordionSummary>
          <BlackAccordionDetails>
            <Typography>
              This is a black styled accordion with white text.
            </Typography>
          </BlackAccordionDetails>
        </BlackAccordion>
      </div>
    </div>
  );
}