import React from "react";
import withRouter from "../../components/withRouter";

class Home extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            this.props.navigate('/todo')
        }, 3000);
    }
    render() {
        return (
            <>
                <div>Hello</div>
            </>)
    }
}
export default withRouter(Home)