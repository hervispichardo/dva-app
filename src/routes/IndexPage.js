import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Teams from '../components/Teams';
import AddTeam from '../components/AddTeam';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <AddTeam />
      <div className={styles.top}>
        <h1 className={styles.title}>¿Cuál será el <span>campeón</span> del mundial?</h1>
        <h3 className={styles.subtitle}>
          <span>Compara</span> y selecciona tu favorito y participa en el sorteo de 6 camisetas de la selección Colombia
        </h3>
      </div>
      <Teams />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
