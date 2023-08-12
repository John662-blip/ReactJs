import React from "react";
// import withRouter from "../../components/withRouter";
import Color from "../HOC/Color";
import logo from '../../assets/images/tải xuống (4).jpg'
import { connect } from "react-redux";
class Home extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            // this.props.navigate('/todo')
        }, 3000);
    }
    render() {
        return (
            <>
                <div>Hello My Name is Hung</div >
                <div>__________________</div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}


export default connect(mapStateToProps)(Color(Home))