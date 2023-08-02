import React from "react";


class AddComponent extends React.Component {

    state = {
        titleJobs: "",
        salary: "",
    }

    handleChangeTitleJob = (Event) => {
        this.setState({
            titleJobs: Event.target.value
        })
    }
    handleChangeSalary = (Event) => {
        this.setState({
            salary: Event.target.value
        })
    }
    clickSubmit = (Event) => {
        Event.preventDefault()
        alert(this.state.titleJobs + " " + this.state.salary)
    }
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Job's title:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.titleJobs}
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