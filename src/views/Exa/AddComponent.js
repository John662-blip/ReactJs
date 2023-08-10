import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleChangeTitleJob = (Event) => {
        this.setState({
            title: Event.target.value
        })
    }
    handleChangeSalary = (Event) => {
        this.setState({
            salary: Event.target.value
        })
    }
    clickSubmit = (Event) => {
        Event.preventDefault()
        if (!this.state.title || !this.state.salary || !(Number(this.state.salary) == this.state.salary)) toast.error("Du lieu vua nhap co van de")
        else {
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
                salary: this.state.salary
            })
            this.setState({
                title: "",
                salary: ""
            })
            toast.success("them thanh cong")
        }

    }

    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Job's title:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.title}
                        onChange={(Event) => this.handleChangeTitleJob(Event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.salary}
                        onChange={(Event) => this.handleChangeSalary(Event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(Event) => { this.clickSubmit(Event) }}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent