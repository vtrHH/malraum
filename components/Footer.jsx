import { Image, Link } from 'next';
import styles from '../styles/Main.module.css';

import { Box, Grid, Typography } from '@mui/material';

import logo from '../public/images/Anja_Maisch_Logo_CMYK_quer_neu.png';

import React from 'react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography variant="body1" color="#077682">
            MALraum | Anja Maisch <br />
            Johannesstraße 23, 70176 Stuttgart <br />
            malraum@anjamaisch.de
          </Typography>
          <br />
          <Link href="/impressum-datenschutz">
            <a className={styles.link}>Impressum & Datenschutz</a>
          </Link>
          <br />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography variant="body1" color="#077682">
            Lernen Sie mehr über meine Arbeit neben dem MALraum auf
          </Typography>
          <br />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="https://anja-maisch.netlify.app/"
              className={styles.footerLink}
            >
              <a target="_blank" rel="noopener">
                <Image src={logo} height={45} width={230} alt="AnjaMaisch" />
              </a>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
