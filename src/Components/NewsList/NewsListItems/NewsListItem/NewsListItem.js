import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux'

const story = (props) => {

    return (<Aux>
        <div>
            <h3> The Developer Community</h3>
            <p> (gitconnected.com) </p>
        </div>
        <div>
            9000 points by test user 1 Hour ago | 42 Comments
        </div>
        </Aux>
    );
}


export default story;