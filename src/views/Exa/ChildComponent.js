import React from "react";

class ChildComponent extends React.Component {
    state = {

    }


    render() {
        let { name, age, arrJobs } = this.props
        return (
            <>
                <div className="Job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div>
                                    {item.title} - {item.salary}
                                </div>)

                        }
                        )

                    }
                </div>
            </>
        )
    }
}




export default ChildComponent;