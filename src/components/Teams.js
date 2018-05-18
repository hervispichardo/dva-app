import React from 'react';
import {connect} from 'dva'
import styles from './Teams.css';
import { Card, Row, Col } from 'antd';

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
                        className={styles.card}
                        onClick={() => onDelete(team.id)}
                        title={team.name}>
                          <h2 className={styles.kms}>{team.kms} Kms</h2>
                          <p>Kms que recorrio para llegar a Rusia</p>
                      </Card>
                   </Col>
          })
        }
      </Row>
    </div>
  );
}

export default connect(({teams}) => ({teams}))(Teams);
