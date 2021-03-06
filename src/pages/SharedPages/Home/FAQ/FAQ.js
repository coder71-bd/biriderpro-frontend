import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import faqImg from '../../../../images/faq/faq.jpg';

const FAQ = () => {
  return (
    <Box>
      <Grid
        container
        sx={{ justifyContent: 'space-evenly', alignItems: 'center', my: 3 }}
      >
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What if my bike is previously damaged</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Don't worry about that. First of all we provide quality bikes to
                our customer. But If you find any problem with Your ordered
                bikes. Just contack In Our customer care service. Then You can
                replace your bike.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How to know that my bike is best.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact in our support service. They will tell you every
                details of a particular bike. Then you can choose the best one.
                Or you can choose from our featured bikes
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                Do you provide safety materials with the bike.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes We provide. Most of the time We give them for free. But You
                have to pay for specialized safety materials{' '}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pl: 4 }}>
          <img src={faqImg} alt="reviews" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
