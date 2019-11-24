import React, { Component } from 'react';
import axios from "axios";

class Alluser extends Component{
    constructor(){
        super();
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        axios.get('/api/users/all')
        .then(user=>{
            this.setState({
                user:user.data
            })
        })
        .catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                {this.state.user.map(user=>{
                    return(
                        <div className="alluser">
                            <span className="name">{user.username}</span> <br/>
                            <span className="title"> {user.title} </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Alluser;