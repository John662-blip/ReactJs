import React from "react";
// import withRouter from "../../components/withRouter";
import Color from "../HOC/Color";
class Home extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            // this.props.navigate('/todo')
        }, 3000);
    }
    render() {
        return (
            <>
                <div>Hello My Name is Hung</div>
            </>)
    }
}
export default Color(Home)