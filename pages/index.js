import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

// import Footer from '../components/Footer';

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
import lu from '../public/images/links_unten.JPG';
import ru from '../public/images/rechts_unten.jpg';
import logo from '../public/images/Anja_Maisch_Logo_CMYK_quer_neu.png';
import malraum from '../public/images/Malraum.jpg';

export default function Home() {
  // Responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        <h1 className={styles.title}>Willkommen im MALraum Stuttgart</h1>
        <Grid container spacing={4} sx={{ marginTop: '2em' }}>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <Image src={malraum} alt="Malraum" />
            <br />
            <br />
            <br />
            <Typography
              variant="h6"
              color="#4d4d4d"
              style={{
                textAlign: 'center',
                paddingLeft: '2em',
                paddingRight: '2em'
              }}
              gutterBottom
            >
              »Man kann einen Menschen nichts lehren. Man kann ihm nur helfen,
              es in sich selbst zu entdecken.«
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              style={{ textAlign: 'center' }}
            >
              (​Galileo Galilei)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} sx={{ mt: '1em' }}>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              Kennen Sie das? Sie beschäftigen sich schon lange mit einem Thema
              und finden irgendwie keine Lösung. Sie drehen sich gedanklich im
              Kreis. Sie wissen nicht, wo Sie anfangen sollen. Mit dem richtigen
              Impuls finden Sie Ihre Lösung.
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              In meinem MALraum in Stuttgart kann ich Ihnen diesen Impuls geben.
              Lassen Sie sich in einer{' '}
              <strong className={styles.textHighlight}>Einzelsitzung</strong>{' '}
              inspirieren und bewegen von der Kraft der Farben und der
              Intuition. Ich biete Ihnen einen sicheren Ort der kreativen
              Entfaltung, bei der Sie spielerisch Ihre Lösung des aktuellen
              Themas finden, die Sie vorher noch nicht wahrnehmen konnten.{' '}
              <strong className={styles.textHighlight}>Outdoor-Sessions</strong>{' '}
              können bei entsprechendem Wetter ebenfalls den Prozess ergänzen
              und zu einem ganzheitlich entspannenden und erfrischenden
              Lösungsweg führen, der nachhaltig seine Kraft im Alltag entfaltet.
              Hierbei benötigen Sie keinerlei Vorerfahrung, da alles intuitiv
              geschieht:{' '}
              <Link href="https://anja-maisch.netlify.app/artikel/61a651778e008700224c327b">
                <a target="_blank" rel="noopener" className={styles.inlineLink}>
                  Einfach MAL intuitiv! Heilsames kreatives Malen einfach
                  erklärt
                </a>
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              Neben den 1:1 Sessions biete ich auch für{' '}
              <strong className={styles.textHighlight}>
                Partner, Familien und Teams
              </strong>{' '}
              Workshops an, um gemeinsame Themen kreativ zu betrachten und
              Lösungen zu finden. Das Setting wird individuell auf ihr Anliegen
              nach einem Vorab-Telefonat gestaltet, so dass der Termin passend
              für alle Teilnehmer ablaufen kann.
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              <strong className={styles.textHighlight}>Online</strong> und in
              meinem{' '}
              <strong className={styles.textHighlight}>
                MALraum im Stuttgarter Westen
              </strong>{' '}
              finden verschiedene{' '}
              <strong className={styles.textHighlight}>
                Themen-Workshops und -Kurse
              </strong>{' '}
              statt. Die Teilnehmeranzahl ist auf 6 Personen begrenzt. Online
              können bis zu 10 Personen teilnehmen. Dies bildet einen
              persönlichen & gemütlichen Rahmen, bei dem jeder seine persönliche
              Kreativität frei ausleben kann.
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              Sie wollen eine kreative Auszeit vom Alltag? In der Mittagspause
              den Kopf frei bekommen? Oder wollen endlich mal wieder malen, aber
              zu Hause fehlt Ihnen der Platz und Ruhe? Dann kommen Sie in den{' '}
              <strong className={styles.textHighlight}>MALraum „4-you“</strong>!
              Ich vermiete meinen MALraum inklusive Material (ausgenommen
              großflächige Leinwände) nach terminlicher Absprache. Auf Wunsch
              gibt es vorab eine kleine Materialkunde. Danach sind Sie ganz
              alleine mit sich, den Farben und Ihrer Kreativität in Verbindung.
              Tauchen Sie ein, in Ihre einzigartig bunte Innenwelt der Gefühle.
              Eine wunderbare Methode sich wieder zu finden, sich zu spüren und
              den „Kopf mal auszuschalten“.
            </Typography>
            <Typography
              variant="body1"
              color="#4d4d4d"
              gutterBottom
              className={styles.text}
            >
              Ein spannendes Rahmenprogramm -gerade für Kinder- ist bei
              Hochzeits- und Geburtstagsfeiern der Garant für ein gelungenes
              Fest. Mit meinem{' '}
              <strong className={styles.textHighlight}>
                MALraum „On-Tour“
              </strong>{' '}
              biete ich einen kreativen Platz bei Ihren Festlichkeiten, an dem
              sich jeder neugierig auf Entdeckungsreise in die Welt der Farben
              und Formen begeben kann. So kann jeglicher „Langeweile“ vorgebeugt
              werden. Den{' '}
              <strong className={styles.textHighlight}>mobilen MALraum</strong>{' '}
              können Sie aber auch für sonstige Events buchen: Kindergeburtstag,
              Junggesellinnenabschied, Ausstellungen & Messen, Kindergartenfest,
              uvm. Sprechen Sie mich einfach an und wir finden eine ideale
              Lösung für die Bereicherung Ihres Events.
            </Typography>
          </Grid>
        </Grid>
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
