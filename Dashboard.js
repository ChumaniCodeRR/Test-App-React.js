import React, { Component } from 'react';
import { getUser , removeUserSession } from './Utils/Common';
import Client from './Utils/Client'; 
import './App.css';
import axios from 'axios';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, 
         Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

/*
         class Dashboard extends React.Component {
            constructor(props) {
              super(props);
              
          
              this.state = {
               // clientList : [],
                loading : false
              };
              this.getClient = this.getClient.bind(this);
            }
          
            getClient(){
              this.setState({loading : true});
              fetch('https://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}',
                 { email : 'noreply@vetro.co.za', password : 'Password@123',
                 method: "GET",
                 headers: {
                   "access-control-allow-origin" : "https://vapi.vetroms.co.za",
                   "Content-type": "application/json; charset=UTF-8"
                 }})
              .then(res => res.json())
              .then(res => {
                setTimeout(() => {
                  this.setState({loading : false, clientList: res.data});
                }, 2000)
              })
            }


            componentDidMount() {
              this.Dashboard();
            }
          
            Dashboard() {
                fetch('https://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}',
                 { email : 'noreply@vetro.co.za', password : 'Password@123',
                 method: "GET",
                 headers: {
                   "access-control-allow-origin" : "https://vapi.vetroms.co.za",
                   "Content-type": "application/json; charset=UTF-8"
                 }})
                .then(({ results }) => this.setState({ client: results }));
            
          
            render() {
              const { userList, loading } = this.state;
             
              return (
                <div className="container App">
             
                  <h4 className="d-inline-block">Clue Mediator</h4>
                  <button className="btn btn-info float-right" onClick={this.getClient} disabled={loading}>{loading ? 'Loading...' : 'Get Client List'}</button>
                  <div className="clearfix"></div>
             
                  <table class="table mt-3">
                    <thead class="thead-dark">
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Avatar</th>
                    </thead>
                    <tbody>
                      {clientList.map(x => <tr>
                        <td>{x.email}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        
                      </tr>)}
                      {clientList.length == 0 && <tr>
                        <td className="text-center" colSpan="4">
                          <b>No data found to display.</b>
                        </td>
                      </tr>}
                    </tbody>
                  </table>
             
                </div>
              );
            }
          }*/
/*
class Dashboard extends Component {
    
      

 <div class="row" className="mb-2 pageheading">
                  <div class="col-sm-12 btn btn-primary">
                  Dashboard
                  Welcome {user.name}!<br /><br />
                    <div id="layout-content" className="layout-content-wrapper">
                    <div className="panel-list">{ client }</div>
                 </div>
                </div>
                </div>


    render() {
 
        return (
            <div class="row" className="mb-2 pageheading">
                <div class="col-sm-12 btn btn-primary">
                    Dashboard 
                    <Client contacts={this.state.client} />
             </div>
            </div>
        );
    }
}

function Dashboard(props){

     const user = getUser();

    //handle click 

    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }


    return (
        <div>
            Welcome // ! <br/><br/>
            <input type="button" onClick={handleLogout} value="Logout"/>

        </div>
    )
}



/*class Dashboard extends Component {
    //...
    componentDidMount() {
      fetch('https://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}')
      .then(res => res.json())
      .then((data) => {
        this.setState({ Client: data })
      })
      .catch(console.log)
    }
    //...
  
}
export default Dashboard;


function Dashboard(props) {

  const user = getUser();
 
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
       //Welcome {user.email}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard
}*/
class Dashboard extends React.Component {
  state = {
    userData: []
  };
  componentDidMount() {

    debugger;
    
    axios.get('http://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }
    )
    .then((res) => {
        debugger;     
    }).catch((error) => {
        console.log(error)
    });

  }
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            {this.state.userData.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.userId}</td> // column data received
                  <td>{data.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

export default Dashboard