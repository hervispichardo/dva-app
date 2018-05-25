import React from 'react'
import {connect} from 'dva'
import styles from './AddTeam.css'
import { Card, Input, Button, Col } from 'antd'

function AddTeam({teams, dispatch}) {

  let teamName, teamCode, teamKms;

  const createTeam = (name, code, votes) => {
    return {
      name: name,
      code: code,
      votes: votes
    }
  }

  const add = () => {
    let name = teamName.input.value;
    let code = teamCode.input.value;
    const team = createTeam(name, code, 0,);
    console.log("add: ", team);
    dispatch({type: 'teams/addTeam', payload: team})
    
  }

  return (
    <div className={styles.normal}>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Add Team">
          <Col span={6}>
            <Input placeholder="Team" ref={c => (teamName = c)}/>
          </Col>
          <Col span={6}>
            <Input placeholder="Code" ref={c => (teamCode = c)}/>
          </Col>
          <Col span={6}>
            <Button onClick={add} type="primary">Add</Button>
          </Col>
        </Card>
      </div>
    </div>
  );
}

export default connect(({teams}) => ({teams}))(AddTeam);
