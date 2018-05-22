import React from 'react';
import { connect } from 'dva';
import styles from './Team.css';

function Team(props) {
  const { name, kms, goals, ranking } = props.team;
  return (
    <div className={styles.normal}>
      { name } kms { kms }
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const teams = state.teams.list;
  return {
    id,
    teams,
    team: teams.find( x => x.id == id)
  };
}

export default connect(mapStateToProps)(Team);
