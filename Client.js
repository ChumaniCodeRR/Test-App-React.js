
import React from 'react';


const Client = ({ client }) => {
    return (
      <div>
        <center><h1>Client List</h1></center>
        {client.map((client) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{client.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{client.email}</h6>
              <p class="card-text">{client.company}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Client