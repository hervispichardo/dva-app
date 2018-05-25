import React from 'react';
import {connect} from 'dva'
import styles from './Teams.less';
import { Card, Row, Col, Button, Avatar } from 'antd';
import { Link } from 'dva/router';

function Teams({teams, loading, dispatch}) {
  const { list } = teams;


  const onDelete = (id) => {
    console.log("elimina: ", id);
    dispatch({type: 'teams/deleteTeam', payload: id})
  } 
  const addVote = (id) => {
    dispatch({type: 'teams/addVote', payload: id})
  }
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        {
          list && list.length ? list.map( team => {
            return <Col 
                      key={`${team.name}-${team.id}`} 
                      xs={32} sm={12} md={8} lg={6} xl={6}>
                      <Card 
                        className={styles.card}>
                          <div className={styles.contFlag}>
                            <div 
                              className={`${styles.flag} ${styles[`${team.code}`]}`}>
                            </div>
                          </div>
                          <Link to={`/team/${team.id}`}>
                            <h2 className={styles.country}>{team.name}</h2>
                          </Link>
                          <p>Kms que recorrio para llegar a Rusia</p>
                          <p>Ranking: {team.votes} </p>
                          <Button 
                            type="primary" 
                            id={team.id}
                            className={styles.vote}
                            size="large"
                            loading={loading.effects['teams/addVote']}
                            onClick={ () => addVote(team.id)}>Votar</Button>
                          <Link to={`/team/${team.id}`}>
                            <Button type="primary" size="large">Participar</Button>
                          </Link>
                      </Card>
                   </Col>
          }) : null
        }
      </Row>
    </div>
  );
}

export default connect(({teams, loading}) => ({teams, loading}))(Teams);
