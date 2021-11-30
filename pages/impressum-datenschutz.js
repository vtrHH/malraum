import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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

import logo from '../public/images/Anja_Maisch_Logo_CMYK_quer_neu.png';

export default function Impressum() {
  // Responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className={styles.container}>
      <Head>
        <title>MALraum - Impressum & Datenschutz</title>
        <meta
          name="description"
          content="Der MALraum - Ort der kreativen
                Entfaltung"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Impressum & Datenschutz</h1>
        <br />
        <Typography variant="h6" color="#077682" gutterBottom>
          Impressum
        </Typography>
        <Typography variant="body1" color="#4d4d4d">
          MALraum Stuttgart | Anja Maisch
        </Typography>
        <Typography variant="body1" color="#4d4d4d">
          ​Telefon: 0711 12295825
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          E-Mail: malraum@anjamaisch.de
        </Typography>
        <br />
        <Typography variant="h6" color="#077682" gutterBottom>
          Datenschutz
        </Typography>
        <Typography
          variant="body1"
          color="#4d4d4d"
          gutterBottom
          style={{ textAlign: 'center' }}
        d>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist Anja
          Maisch – Kontaktdaten siehe oben.
        </Typography>
        <br />
        <Typography variant="h6" color="#077682" gutterBottom>
          Information zur Datenverarbeitung
        </Typography>
        <Typography
          variant="body1"
          color="#4d4d4d"
          gutterBottom
          style={{ textAlign: 'center' }}
        >
          Der Hosting-Provider dieser Website erhebt und speichert automatisch
          einige nicht personenbezogene Daten in den sogenannten
          Server-Logfiles. Diese übermittelt Ihr Browser automatisch und sind
          zur Auswertung im Fehlerfall gedacht. Diese Website speichert
          keinerlei Cookies oder personenbezogene Daten.
        </Typography>
        <br />
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          Konkret werden die folgenden Daten erfasst:
        </Typography>
        <br />
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - Browsertyp und Browserversion
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - verwendetes Betriebssystem
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - Referrer URL
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - Hostname des zugreifenden Rechners
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - Uhrzeit der Serveranfrage
        </Typography>
        <Typography variant="body1" color="#4d4d4d" gutterBottom>
          - IP-Adresse
        </Typography>
      </main>

      <footer className={styles.footer}>
        {isMobile ? (
          <Box className={styles.mobileFooter}>
            <Link href="/">
              <a className={styles.link}>Zurück zur Homepage</a>
            </Link>
            <br />
            <br />
            <Typography
              variant="body1"
              color="#077682"
              className={styles.textFooterMobile}
              gutterBottom
            >
              MALraum | Anja Maisch, Johannesstraße 23, 70176 Stuttgart
            </Typography>
            <Typography variant="body1" color="#077682" gutterBottom>
              malraum@anjamaisch.de
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="#077682"
              className={styles.textFooterMobile}
            >
              Lernen Sie mehr über meine Arbeit neben dem MALraum auf
            </Typography>
            <br />
            <Link href="https://anja-maisch.netlify.app/">
              <a target="_blank" rel="noopener">
                <Image src={logo} height={45} width={230} alt="AnjaMaisch" />
              </a>
            </Link>
          </Box>
        ) : (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Typography variant="body1" color="#077682">
                MALraum | Anja Maisch <br />
                Johannesstraße 23, 70176 Stuttgart <br />
                malraum@anjamaisch.de
              </Typography>
              <br />
              <Link href="/">
                <a className={styles.link}>Zurück zur Homepage</a>
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
                    <Image
                      src={logo}
                      height={45}
                      width={230}
                      alt="AnjaMaisch"
                    />
                  </a>
                </Link>
              </Box>
            </Grid>
          </Grid>
        )}
      </footer>
    </div>
  );
}
