import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class Singup extends React.Component {
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
        if (this.state.user.password === this.state.user.passwordConfirm) {
            axios({
                method: 'post',
                url: 'http://localhost:3004/users/signup',
                data: this.state.user
            })
                .then((response) => {
                    this.props.history.push('/signin');
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
                            <h4 className="card-title mt-3 text-center">Create Account</h4>
                            <p className="text-center">Get started with your free account</p>
                            <form>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    </div>
                                    <input name="name" onChange={this.inputHandler} className="form-control" placeholder="Full name" type="text" />
                                </div>
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
                                    <input name="password" onChange={this.inputHandler} className="form-control" placeholder="Create password" type="password" />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input name="passwordConfirm" onChange={this.inputHandler} className="form-control" placeholder="Repeat password" type="password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={this.clickHandler} className="btn btn-primary btn-block"> Create Account  </button>
                                </div>
                                <p className="text-center">Have an account? <Link to="/signin">Sign in</Link> </p>
                            </form>
                        </article>
                    </div>
                </div>
            </div >
        );
    }
}


export default withRouter(Singup);
