import React from "react";
import "./style.css";
import axios from "axios";

function fetchRecords(){
  axios.get('PATH')
  .then((response) => {
    var resData = response.data;
    let data = JSON.stringify(resData);
    window.alert("Response recieved from server = " + data);
  });
}