import React from "react";
// import withRouter from "../../components/withRouter";
//import Color from "../HOC/Color";
import logo from '../../assets/images/tải xuống (4).jpg'
import { connect } from "react-redux";
class Home extends React.Component {
    handleDeleteUser = (item) => {
        this.props.deleteUserRedux(item)
    }
    handleCreateUser = () => {
        this.props.addUserReduct()
    }
    render() {
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>Hello My Name is Hung</div >
                <div>__________________</div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <button style={{ cursor: "pointer" }} type="button"
                                        onClick={() => this.handleDeleteUser(item)}
                                    >X</button>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleCreateUser()}>Add New</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserReduct: () => dispatch({ type: "CREATEUSER" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)