import React from 'react'
import {connect} from 'dva'
import styles from './AddTeam.css'
import { Card, Input, Button } from 'antd'

function AddTeam({teams, dispatch}) {

  let inputTeam;

  const createTeam = (name, goals, rating) => {
    return {
      name: name,
      goals: 5,
      ranking: 4,
      kms: 3256,
      years: ["1964", "1994", "2002"],
      players: 5,
      position: 'Campeon'
    }
  }

  const add = () => {
    const value = inputTeam.input.value;
    const team = createTeam(value, 5,4);
    console.log("add: ", team);
    dispatch({type: 'teams/addTeam', payload: team})
  }

  return (
    <div className={styles.normal}>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Add Team">
          <Input placeholder="Team" ref={c => (inputTeam = c)}/>
          <Button onClick={add} type="primary">Add</Button>
        </Card>
      </div>
    </div>
  );
}

export default connect(({teams}) => ({teams}))(AddTeam);
