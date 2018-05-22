import React from 'react';
import {connect} from 'dva'
import styles from './Teams.less';
import { Card, Row, Col, Button, Avatar } from 'antd';
import { Link } from 'dva/router';

function Teams({teams, dispatch}) {
  const { list } = teams;

  const onDelete = (id) => {
    console.log("elimina: ", id);
    dispatch({type: 'teams/deleteTeam', payload: id})
  } 
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        {
          list && list.map( team => {
            return <Col key={`${team.name}-${team.id}`} span={6}>
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
                          <h3 className={styles.kms}>{team.kms} Kms</h3>
                          <p>Kms que recorrio para llegar a Rusia</p>
                          <Link to={`/team/${team.id}`}>
                            <Button type="primary" size="large">Participar</Button>
                          </Link>
                      </Card>
                   </Col>
          })
        }
      </Row>
    </div>
  );
}

export default connect(({teams}) => ({teams}))(Teams);
