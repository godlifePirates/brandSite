import React, { Component, useEffect, useState } from 'react';
import api from '../api/api';
import {useParams } from "react-router-dom"

function Header () {

    const [logs, setLogs] = useState([]);
    const getLogs = async () => {
        try {
            const json = await api.getLogs();
            setLogs(json)
        } catch (error) {
            console.error('Error during getLogs call', error);
        }
    }
    useEffect(() => {
        getLogs();
    },[])

    // Wrap the map function in a React fragment
    return (
        <div>
        { logs.map(item => (
            <div key={item.seq}>
              <p>{item.seq}</p>
              <p>{item.description}</p>
              <p>{item.createDate}</p>
              <p>{item.updateDate}</p>
            </div>
          )) }
        </div>
    )
}

export default Header;
