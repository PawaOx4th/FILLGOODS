/* eslint-disable linebreak-style */
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();
// const settingdb = { timestampsInSnapshots: true };
// db.settings(settingdb);

export default db;
