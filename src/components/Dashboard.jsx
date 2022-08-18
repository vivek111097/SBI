import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import InsurancePlans from './InsurancePlans';
import Lob from './Lob';
import Navbar from './Navbar';

const Dashboard = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
        console.log(props.user)
        if (!props.user.UserToken) {
            navigate(`/`);
        }
    }, [])
    return (
        props.user.UserToken && <div>
            {props.user.Username}
            <>
                <Navbar user={props.user} />
                <InsurancePlans user={props.user}/>
                <Lob />
            </>
        </div>
    )
}



const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);