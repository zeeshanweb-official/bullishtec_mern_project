import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    inputHandler = (event) => {
        let user = this.state.user
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    componentDidMount = () => {
        let user = localStorage.getItem("user")
        if (user) {
            this.props.history.push('/');
        }
    }
    clickHandler = (e) => {
        e.preventDefault();
        if (this.state.user.email || this.state.user.password) {
            axios({
                method: 'post',
                url: 'http://localhost:3004/users/login',
                data: this.state.user
            })
                .then((response) => {
                    localStorage.setItem("user", JSON.stringify(response.data))
                    this.props.history.push('/');

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    render() {
        return (
            <div className="App">
                <div className="container" id="container">
                    <div className="card bg-light mt-5">
                        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                            <h4 className="card-title mt-3 text-center">Login to Your Account</h4>
                            <form>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input name="email" onChange={this.inputHandler} className="form-control" placeholder="Email address" type="email" />
                                </div>


                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input name="password" onChange={this.inputHandler} className="form-control" placeholder="Password" type="password" />
                                </div>

                                <div className="form-group">
                                    <button onClick={this.clickHandler} type="submit" className="btn btn-primary btn-block"> Login  </button>
                                </div>
                                <p className="text-center">Have an account? <Link to="/signup">Sign up</Link> </p>
                            </form>
                        </article>
                    </div>
                </div>
            </div >
        );
    }
}


export default withRouter(Signin);
