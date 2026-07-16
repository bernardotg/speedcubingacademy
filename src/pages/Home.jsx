import styles from './Home.module.css';

export default function Home() {
  return (
    <section id="inicio" className={styles.homeContainer}>
      <div className={styles.heroContent}>
        <h1>Speedcubing Academy</h1>
        <p>Impulsando el Speedcubing en Venezuela. Únete a la comunidad, compite en reuniones y torneos, supera tus propios récords.</p>
        <a href="#competencias" className={styles.ctaButton}>
          Ver Torneos
        </a>
      </div>
    </section>
  );
}
