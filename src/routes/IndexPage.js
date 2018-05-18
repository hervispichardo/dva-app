import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Teams from '../components/Teams';
import AddTeam from '../components/AddTeam';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Paises</h1>
      <AddTeam />
      <Teams />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
