import React , { useState , Component }  from 'react';
import axios from 'axios';
//import React,  from 'react';
import { setUserSession } from './Utils/Common';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
    InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './App.css'; 

/*
class Login extends Component {
    constructor(){
        super();

        this.state = {
            text: 'Please wait. Loading.',
            Email: '',
            Password:''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.Login = this.Login.bind(this);
    }
    Email(event) {
        this.setState({Email: event.target.value})
    }
    Password(event){
        this.setState({Password: event.target.value})
    }
    
    Login(event){
        debugger;
       
      const myHeaders = new Headers();

      //myHeaders.append('x-api-key', 'KEY_HERE');
      //myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
     // myHeaders.append('cache-control', 'no-cache')

        fetch('http://vapi.vetroms.co.za/api/auth/login', { 
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept':'application/json',
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': 'http://vapi.vetroms.co.za',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify({       
                Email: this.state.Email,
                Password: this.state.Password
            })
            }).then(function(res){
                debugger;
                return res.json(); //error here
              }).then(function(data){
                  debugger;
                console.log(data);
              }).catch((error) => {
                debugger;
                console.log(error);
              });      
            }
    */
   export default class Login extends Component {
    //const [loading, setLoading] = useState(false);
    
    constructor(props) {
        
        super(props)

        

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        //const [loading, setLoading] = useState(false);
        //const username = useFormInput('');
       // const password = useFormInput('');
        //const [error, setError] = useState(null);

        const userObject = {
            email: this.state.email,
            password: this.state.password
        };
        
        //setError(null);
        //setLoading(true);
        axios.post('http://vapi.vetroms.co.za/api/auth/login', userObject)
            .then((res) => {
                debugger;
               //setLoading(false);
               //setUserSession(response.data.token, response.data.user);
               this.props.history.push('/dashboard');
                return res.json();
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password: '' })
    }

    render() {
return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" 
                                            className="mb-2 pageheading">
                                            <div class="col-sm-12 btn btn-primary">
                                               Login
                                             </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" value={this.state.email}
                                                 onChange={this.onChangeEmail} 
                                                 placeholder="Enter Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" value={this.state.password}
                                                onChange={this.onChangePassword} 
                                                placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button  onClick={this.onSubmit} 
                                            color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


//export default Login;



 /*
function Login (props){
    const [loading, setLoading] = useState(false);
    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    //const [loading, setLoading] = useState(false);

    // handle click 

    const handleLogin = () => {
        setError(null);
        setLoading(true);


      axios.post('',{email,password})
           .then(res => {
               console.log(res);
               console.log(res.data);
           })
        }



       const requestOptions = {  
                //body : { 'email' : 'noreply@vetro.co.za', 'password' : 'Password@123' },  
                headers: {     
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "access-control-allow-origin": "*" ,
                  "access-control-allow-methods" : "GET, POST, PUT, DELETE, OPTIONS",
                  "access-control-allow-headers": "X-Request-With, Content-Type, X-Token-Auth, Authorization, Accept, Application"
                },        
        };

        

        axios.post('http://vapi.vetroms.co.za/api/auth/login', {email:email.value, password:email.value , requestOptions }).then(res => {
            setLoading(false);
            setUserSession(res.data.token, res.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
           setLoading(false);
           if(error.response.status === 401) setError(error.response.data.message);
           else setError("Something went wrong. Please try again later.");
        });
    }

    //console.log(email,password);

    return (
        <div>
            Login<br /><br />
            <div>
                Email <br />
                <input type="text" {...email} autoComplete="new-password"/>

            </div>

            <div style={{ marginTop:10}}>
                Password <br/>
                <input type="password" {...password} autoComplete="new-password"/>

            </div>
            {error && <><small style={{color:'red'}}></small><br /></>}<br/>
            <input type='button' value={loading ? 'Loading' : 'Login' } onClick={handleLogin} disabled={loading}/>


        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
  
    function handleChange(e) {
      setValue(e.target.value)
    }
  
    return {
      value,
      onChange: handleChange
    }
  }

*/

