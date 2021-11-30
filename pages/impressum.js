import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

import {
  ImageList,
  ImageListItem,
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

import lo from '../public/images/links_oben.jpg';
import ro from '../public/images/rechts_oben.jpg';
import lu from '../public/images/links_unten.jpg';
import ru from '../public/images/rechts_unten.jpg';
import logo from '../public/images/Anja_Maisch_Logo_CMYK_quer_neu.png';

export default function Home() {
  // Responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={styles.container}>
      <Head>
        <title>MALraum</title>
        <meta
          name="description"
          content="Der MALraum - Ort der kreativen
                Entfaltung"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Impressum</h1>
      </main>

      <footer className={styles.footer}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Typography variant="body1" color="#077682">
              MALraum | Anja Maisch <br />
              Johannesstraße 23, 70176 Stuttgart <br />
              malraum@anjamaisch.de
            </Typography>
            <br />
            <Typography variant="body1" color="#077682">
              Impressum & Datenschutz
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Typography variant="body1" color="#077682">
              Lernen Sie mehr über meine Arbeit neben dem MALraum auf
            </Typography>
            <br />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
