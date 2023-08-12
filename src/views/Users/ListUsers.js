import React from "react";
import axios from "axios";
import "./ListUsers.scss"
import withRouter from "../../components/withRouter";
class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=1")
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handelViewDetailUser = (id) => {
        this.props.navigate('/users/' + id)
    }
    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container" >
                <div className="title">Fetch all list users</div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (<div onClick={() => this.handelViewDetailUser(item.id)} className="child" key={item.id} >{index + 1} - {item.last_name} {item.first_name} </div>)
                        })}
                </div>
            </div>
        )
    }
}
export default withRouter(ListUsers)