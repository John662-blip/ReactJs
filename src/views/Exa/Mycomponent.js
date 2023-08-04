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

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        }
        )
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, "   ", prevState);
    }
    componentDidMount() {
        console.log('run');
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>
        )
    }
}




export default Mycomponent;