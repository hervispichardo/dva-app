import request from '../utils/request'
import db from '../utils/firebase'
import {assoc, append} from 'ramda'
import delay from 'delay'

const api = 'http://localhost:9000';

export async function getTeams() {

  return request(`${api}/teams/`)
  .then( res => {
    return res.data.rows;
  }).catch( err => console.log(err));

}

export async function addVote(id) {

  return request(`${api}/teams/increase/${id}`, {
    method: 'POST'
  })
  .then(delay(1000))
  .then( res => {
    return res.data;
  }).catch( err => console.log(err));

}


export async function addTeam(team) {

  return request(`${api}/teams/`, {
    method: 'POST',
    body: JSON.stringify(team)
  }).then( res => {
    console.log("res POST: ", res.data)
    return res.data;
  }).catch( err => console.log(err));

}

export async function deleteTeam(id) {

  return request(`${api}/teams/${id}`, {
    method: 'DELETE'
  }).then( res => {
    console.log('rest DELETE ', res)
    return id;
  }).catch( err => console.log(err));

}