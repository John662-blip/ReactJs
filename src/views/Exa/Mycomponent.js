import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Mycomponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abc', title: "developer", salary: "500" },
            { id: 'abc1', title: "testers", salary: "400" },
            { id: 'abc2', title: "protect manager", salary: "1000" }
        ]
    }
    render() {
        return (
            <>
                <AddComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        )
    }
}




export default Mycomponent;