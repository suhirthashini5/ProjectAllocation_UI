import React, { Component } from 'react';

class Dashex extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1>Defect Tracker</h1>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <button>Notification</button>
                        <button>Share</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <h2>xciux</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashex;