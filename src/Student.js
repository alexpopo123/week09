import React, { Component } from "react";

class Student extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
       
    }

    render(){
        console.log(this.props)
        return (
            <>
            <h1>Student Informations</h1>
            <h3>First Name:{ this.props.fnm }</h3>
            <h3>Student Name - { this.props.fnm } - { this.props.name }</h3>
            </>
        )
    }
}

export default Student