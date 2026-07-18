import styles from './Competitions.module.css';
import { Users } from 'lucide-react';

export default function Competitions() {
  const upcoming = [
    { id: 99, date: 'Hoy', name: 'Torneo Online con Premios 2026', location: 'Venezuela', type: 'Comp', people: '-', link: 'https://latincubeshop.vercel.app/torneos', image: null }
  ];

  const past = [
    { id: 1, date: '8 Nov 2025', name: 'Isla De Margarita Rubik 2025', location: 'Pampatar, Venezuela', type: 'Reunión', people: '13', link: 'https://cubingcontests.com/competitions/IslaDeMargaritaRubik2025', image: null },
    { id: 2, date: '13 Jul 2025', name: 'Reunión Cubera Aragua 2025', location: 'Maracay, Venezuela', type: 'Reunión', people: '13', link: 'https://cubingcontests.com/competitions/ReunionCuberaAragua2025', image: null },
    { id: 3, date: '6 Jul 2025', name: 'Erg Metropolis 2025', location: 'Barquisimeto, Venezuela', type: 'Reunión', people: '10', link: 'https://cubingcontests.com/competitions/ErgMetropolis2025', image: null },
    { id: 5, date: '13 Dec 2024', name: 'Good Ending Cubing Caracas 2024', location: 'Caracas, Venezuela', type: 'Comp', people: '20', link: 'https://cubingcontests.com/competitions/GoodEndingSpeedcubingCaracas2024', image: null },
    { id: 6, date: '7 Dec 2024', name: "Na'Guara Metropolis Lara 2024", location: 'Barquisimeto, Lara, Venezuela', type: 'WCA', people: '8', link: 'https://cubingcontests.com/competitions/NaGuaraMetropolisLara2024', image: null },
    { id: 7, date: '13 Oct 2024', name: 'Reunión Cubera en Lara 2024', location: 'Barquisimeto, Venezuela', type: 'Reunión', people: '17', link: 'https://cubingcontests.com/competitions/ReunionCuberaEnLara2024', image: null },
    { id: 8, date: '28 Sep 2024', name: 'Rio Lama Barquisimeto 2024', location: 'Barquisimeto, Venezuela', type: 'Comp', people: '16', link: 'https://cubingcontests.com/competitions/RioLamaBarquisimeto2024', image: '/src/assets/riolamaNoviembre.jpg' },
    { id: 9, date: '17 Aug 2024', name: 'Ciudad Crepuscular 2024', location: 'Barquisimeto, Venezuela', type: 'Comp', people: '14', link: 'https://cubingcontests.com/competitions/TorneoNivelesCiudadCrepuscular2024', image: null },
    { id: 10, date: '22 Jun 2024', name: 'Torneo Niveles Caracas 2024', location: 'Caracas, Venezuela', type: 'Comp', people: '36', link: 'https://www.instagram.com/p/C8ng_GAJdN5/?img_index=1', image: '/src/assets/caracas1.jpg' },
    { id: 11, date: '3 Jun 2024', name: 'Isla De Margarita Rubik 2024', location: 'Margarita, Venezuela', type: 'Reunión', people: '3', link: 'https://cubingcontests.com/competitions/IslaDeMargaritaRubik2024', image: '/src/assets/margarita.jpg' },
    { id: 12, date: '4 May 2024', name: 'Torneo Niveles Metrópolis 2024', location: 'Barquisimeto, Venezuela', type: 'Comp', people: '26', link: 'https://www.instagram.com/p/C6mcqr1J6AK/?img_index=1', image: '/src/assets/metropolis1.jpg' },
    { id: 13, date: '30 Mar 2024', name: 'Torneo Niveles Rio Lama 2024', location: 'Barquisimeto, Venezuela', type: 'Comp', people: '25', link: 'https://www.instagram.com/p/C5dxydsL0E7/?img_index=1', image: '/src/assets/riolamaMarzo.jpg' },
    { id: 14, date: '11 Nov 2023', name: 'Rio Lama Barquisimeto 2023', location: 'Barquisimeto, Venezuela', type: 'WCA', people: '40', link: 'https://www.worldcubeassociation.org/competitions/RioLamaBarquisimeto2023', image: null },
    { id: 15, date: '9 Sep 2023', name: 'Yaracuy Open 2023', location: 'Yaritagua, Venezuela', type: 'WCA', people: '16', link: 'https://www.worldcubeassociation.org/competitions/YaracuyOpen2023', image: '/src/assets/yaracuyopen.jpg' },
    { id: 16, date: '28 Jul 2018', name: 'Barquisimeto Open 2018', location: 'Barquisimeto, Venezuela', type: 'WCA', people: '17', link: 'https://www.worldcubeassociation.org/competitions/BarquisimetoOpen2018', image: null },
  ];

  const getBadgeClass = (type) => {
    switch(type) {
      case 'WCA': return styles.badgeWca;
      case 'Reunión': return styles.badgeReunion;
      case 'Comp': return styles.badgeComp;
      default: return '';
    }
  };

  return (
    <section id="competencias" className={styles.compContainer}>
      <div className={styles.contentPanel}>

        <div className={styles.tableSection}>
          <h2>Próximas Competencias</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.modernTable}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Lugar</th>
                  <th>Tipo</th>
                  <th>
                    <div className={styles.peopleIcon} title="Personas"><Users size={16} /></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map(comp => (
                  <tr key={comp.id}>
                    <td>{comp.date}</td>
                    <td>
                      <div className={styles.nameCell}>
                        <a href={comp.link} target="_blank" rel="noopener noreferrer" className={styles.compLink}>
                          {comp.name}
                        </a>
                      </div>
                    </td>
                    <td>{comp.location}</td>
                    <td>
                      <span className={`${styles.badge} ${getBadgeClass(comp.type)}`}>
                        {comp.type}
                      </span>
                    </td>
                    <td>{comp.people}</td>
                  </tr>
                ))}
                {upcoming.length === 0 && (
                  <tr>
                    <td colSpan="5" className={styles.empty}>No hay competencias próximas planificadas</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.tableSection}>
          <h2>Competencias Pasadas</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.modernTable}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Lugar</th>
                  <th>Tipo</th>
                  <th>
                    <div className={styles.peopleIcon} title="Personas"><Users size={16} /></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {past.map(comp => (
                  <tr key={comp.id}>
                    <td>{comp.date}</td>
                    <td>
                      <div className={styles.nameCell}>
                        <a href={comp.link} target="_blank" rel="noopener noreferrer" className={styles.compLink}>
                          {comp.name}
                        </a>
                      </div>
                    </td>
                    <td>{comp.location}</td>
                    <td>
                      <span className={`${styles.badge} ${getBadgeClass(comp.type)}`}>
                        {comp.type}
                      </span>
                    </td>
                    <td>{comp.people}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
