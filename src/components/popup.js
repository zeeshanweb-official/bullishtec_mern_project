import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router-dom'
let $ = window.jQuery
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monitor: {
                domain: 'http'
            },
            range: 0,
            ticks: [
                { name: "5 mins", value: "5" },
                { name: "10 mins", value: "10" },
                { name: "30 mins", value: "30" },
                { name: "45 mins", value: "45" },
                { name: "1 hour", value: "60" },
                { name: "4 hour", value: "240" },
                { name: "8 hour", value: "480" },
                { name: "12 hour", value: "720" },
                { name: "16 hour", value: "960" },
                { name: "20 hour", value: "1200" },
                { name: "24 hour", value: "1440" },
            ]
        };
    }
    componentDidMount = () => {
        // console.log(this.props)
    }
    inputHandler = (event) => {
        let monitor = this.state.monitor
        monitor[event.target.name] = event.target.value
        this.setState({ monitor })
    }
    checkboxhandler = (e) => {
        let monitor = this.state.monitor
        monitor[e.target.name] = e.target.checked
        this.setState({ monitor })
    }
    clickHandler = (e) => {
        e.preventDefault();
        let monitor = this.state.monitor
        let user = JSON.parse(localStorage.getItem("user"))
        monitor["interval"] = this.state.ticks[this.state.range].value
        monitor["user_ID"] = user.id
        console.log(monitor)
        axios({
            method: 'post',
            url: 'http://localhost:3004/posts/',
            data: this.state.monitor
        })
            .then((response) => {
                console.log(response);
                this.props.handleClose()
            })
            .catch((error) => {
                console.log(error);
                this.props.handleClose()
            });
    }

    rangeSelection = (e) => {
        this.setState({ range: e.target.value })
    }
    render() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>

                    <form>
                        <div className="form-group input-group mb-0">

                            <select name="domain" value={this.state.monitor.domain} className="custom-select" onChange={this.inputHandler}>
                                <option value="http">http</option>
                                <option value="https">https</option>
                            </select>
                            {/* <input name="domain" onChange={this.inputHandler} className="form-control" placeholder="Domain" type="text" /> */}
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" onChange={this.checkboxhandler} name="use_SSL" className="custom-control-input" id="ssl" />
                            <label className="custom-control-label" htmlFor="ssl">use SSL</label>
                        </div>
                        <div className="form-group input-group">

                            <input name="name" onChange={this.inputHandler} className="form-control" placeholder="Friendly Name" type="text" />
                        </div>


                        <div className="form-group input-group">

                            <input name="url" onChange={this.inputHandler} className="form-control" placeholder="URL" type="text" />
                        </div>
                        <div className="form-group input-group" style={{ width: "100%" }}>

                            {/* <input name="passwordConfirm" onChange={this.inputHandler} className="form-control" placeholder="Repeat password" type="password" /> */}
                            <div className="form-group" style={{ width: "100%" }}>
                                <div>
                                    <input name="interval" id="gdskill2" type="range" min="0"
                                        value={this.state.range ? this.state.range : 0} max="10"
                                        step="1" list="ticks" onChange={this.rangeSelection} /><br />
                                    <output id="Output2" className="output">{this.state.ticks[this.state.range].name}</output>
                                </div>

                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={this.clickHandler} className="btn btn-primary btn-block"> Create Monitor  </button>
                        </div>
                    </form>
                </article>
            </div>





        );
    }
}


export default withRouter(Signin);
