import React from "react";
import withRouter from "../../components/withRouter";
import axios from "axios";
class DetailUsers extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {

        let id = this.props.params.id
        let res = await axios.get('https://reqres.in/api/users/' + id)
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })

    }
    handelBackBtn = () => [
        this.props.navigate('/users')
    ]

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>Detail user with id : {this.props.params.id}</div>
                {!isEmptyObj &&
                    <>
                        <div>User's name : {user.first_name} {user.last_name}</div>
                        <div>User's email : {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                    </>
                }
                <div>
                    <button type="button" style={{ cursor: "pointer" }} onClick={() => this.handelBackBtn()}>Back</button>
                </div>
            </>
        )
    }
}

export default withRouter(DetailUsers)