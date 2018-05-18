import request from '../utils/request'
// import db from '../utils/firebase'
import R from 'ramda'

const api = 'http://localhost:3000';

export async function getTeams() {
  return request(`${api}/teams`).then( res => {
    return res.data;
  }).catch( err => console.log(err));
}

export async function addTeam(team) {
  console.log(JSON.stringify(team))
  return request(`${api}/teams`, {
    method: 'POST',
    body: JSON.stringify(team)
  }).then( res => {
    return res.data;
  }).catch( err => console.log(err));
}

export async function deleteTeam(id) {
  return request(`${api}/teams/${id}`, {
    method: 'DELETE'
  }).then( res => {
    return res.data;
  }).catch( err => console.log(err));
}