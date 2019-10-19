import React, {Component} from 'react';

import './common.css';

import QuestionsList from './QuestionsList';
import Countdown from 'react-countdown-now';


export default class Header extends Component {

    render() {
        return(
            <div>
                <div className="header">
                    <h1 className="headerText">    
                        React-Quiz-Questions
                        &nbsp;&nbsp;(<Countdown date={Date.now() + 5400000} />)
                    </h1>
                </div>
                <div>
                    <QuestionsList />
                </div>
            </div>
        )
    }
}