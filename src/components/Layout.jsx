import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Layout.module.css';
import logoUrl from '../assets/rubik_venezuela.jpg';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Simple scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'competencias', 'redes'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.layout}>
      <header className={styles.topheader}>
        <nav className={styles.topnav}>
          <div className={styles.brand}>
            <a href="#inicio" onClick={closeMenu}>
              <img src={logoUrl} alt="Logo" className={styles.logo} />
            </a>
          </div>
          
          <button className={styles.openMenu} onClick={toggleMenu} aria-label="Abrir menú">
            <Menu size={30} />
          </button>

          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpened : ''}`}>
            <button className={styles.closeMenu} onClick={toggleMenu} aria-label="Cerrar menú">
              <X size={30} />
            </button>
            <li>
              <a href="#inicio" onClick={closeMenu} className={activeSection === 'inicio' ? styles.activeLink : ''}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#competencias" onClick={closeMenu} className={activeSection === 'competencias' ? styles.activeLink : ''}>
                Competencias
              </a>
            </li>
            <li>
              <a href="#redes" onClick={closeMenu} className={activeSection === 'redes' ? styles.activeLink : ''}>
                Redes Sociales
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.mainContainer}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <img src={logoUrl} alt="Logo" className={styles.footerLogo} />
          <div className={styles.footerLinks}>
            <a href="#inicio">Inicio</a>
            <a href="#competencias">Competencias</a>
            <a href="#redes">Redes Sociales</a>
          </div>
          <p>&copy; {new Date().getFullYear()} SpeedcubingAcademy. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
