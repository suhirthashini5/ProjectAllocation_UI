import React, { Component } from 'react';
import {Doughnut} from "react-chartjs-2";
import { MDBContainer } from 'mdbreact';

class AllocationChart extends Component{
    state = {
        dataDoughnut: {
            labels: ["Defect System", "Leave Management System", "HRM System", "School System"],
            datasets: [
                {
                    data: [100,50,20,80],
                    backgroundColor: ["blue", "yellow", "red", "green"],
                    hoverBackgroundColor: [
                        "blue",
                        "yellow",
                        "red",
                        "green"
                    ]
                }
            ]
        }
    }

    render(){
        return(
            <MDBContainer>
                <h3 className="mt-5">Project Performance</h3>
                <Doughnut 
                    data={this.state.dataDoughnut} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: true
                        }}/>
            </MDBContainer>
        );
    }
}

export default AllocationChart;