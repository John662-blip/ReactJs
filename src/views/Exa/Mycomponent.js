import React from "react";
import ChildComponent from "./ChildComponent";

class Mycomponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'abc', title: "developer", salary: "500 $" },
            { id: 'abc1', title: "testers", salary: "400 $" },
            { id: 'abc3', title: "protect manager", salary: "1000 $" }
        ]
    }
    handleChangeFirstName = (Event) => {
        this.setState({
            firstName: Event.target.value
        })
    }
    handleChangeLastName = (Event) => {
        this.setState({
            lastName: Event.target.value
        })
    }
    clickSubmit = (Event) => {
        Event.preventDefault()
        alert(this.state.firstName + " " + this.state.lastName)
    }

    render() {
        return (
            <>

                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.firstName}
                        onChange={(Event) => this.handleChangeFirstName(Event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.lastName}
                        onChange={(Event) => this.handleChangeLastName(Event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(Event) => { this.clickSubmit(Event) }}
                    />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={"25"}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}




export default Mycomponent;