import React from "react";
//class based component

class userclass extends React.Component {
// if we wnat to use hooks ie state variable in class based component so we will create a constructor 
constructor(props){
    super(props);

//state varible

    this.state={
        count:0,
    };
}

    render(){
        return (
            <div className="user-card">
                <h1>This is about us:{this.props.name}</h1>
            </div>
        )
    }
}
export default userclass;


// if we wnat to use hooks ie state variable in class based component so we will create a constructor 
