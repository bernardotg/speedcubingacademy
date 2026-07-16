import styles from './Socials.module.css';
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Socials() {
  const socials = [
    { id: 1, name: 'WhatsApp', icon: <FaWhatsapp size={40} />, link: 'https://whatsapp.com/channel/0029VaSqp1m6LwHtRrjeK82Y', color: '#25D366' },
    { id: 2, name: 'Instagram', icon: <FaInstagram size={40} />, link: 'https://www.instagram.com/speedcubingacademy', color: '#E1306C' },
    { id: 3, name: 'YouTube', icon: <FaYoutube size={40} />, link: 'https://www.youtube.com/@SpeedcubingAcademy', color: '#FF0000' }
  ];

  return (
    <section id="redes" className={styles.socialsContainer}>
      <div className={styles.contentPanel}>
        <div className={styles.header}>
          <h1>¡Síguenos en nuestras Redes Sociales!</h1>
          <p>Únete a nuestra comunidad de speedcubers</p>
        </div>

        <div className={styles.grid}>
          {socials.map((social) => (
            <a 
              key={social.id} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--hover-color': social.color }}
            >
              <div className={styles.iconWrapper}>
                {social.icon}
              </div>
              <span className={styles.name}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
