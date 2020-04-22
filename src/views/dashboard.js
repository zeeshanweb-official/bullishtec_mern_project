import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Navbar from "../components/navbar"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }
    // inputHandler = (event) => {
    //     let user = this.state.user
    //     user[event.target.name] = event.target.value
    //     this.setState({ user })
    // }
    componentDidMount = () => {
        let user = JSON.parse(localStorage.getItem("user"))
        axios.get("http://localhost:3004/posts/" + user.id).then((success) => {
            console.log(success.data)
            this.setState({ rows: success.data })
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="App">
                <Navbar></Navbar>
                <div className="container" id="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Name</th>
                                <th scope="col">URL</th>
                                <th scope="col">interval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rows.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row"><div className={item.status ? "status green" : "status red"}></div></th>
                                            <td>{item.name}</td>
                                            <td>{item.url}</td>
                                            <td>{item.interval}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}


export default withRouter(Home);
