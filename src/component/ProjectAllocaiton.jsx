import React, { Component } from 'react';
// import './App.css';
import Table from './Table';
import AllocationChart from './AllocationChart';
import 'bootstrap/dist/css/bootstrap.css';
// import { Button }  from 'antd';
import {
    Modal,
    Button,
    TreeSelect,
    Select,
    Row,
    Col,
    PageHeader,
   
    Progress,
    Statistic,
    Pagination
} from 'antd';

const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 10 + 1000 * 50; // Moment is also OK
const deadline1 = Date.now() + 1000 * 60 * 60 * 24 * 20 + 1000 * 30;
const deadline2 = Date.now() + 1000 * 60 * 60 * 24 * 35 + 1000 * 10;
const deadline3 = Date.now() + 1000 * 60 * 60 * 24 * 50 + 1000 * 60;
const deadline4 = Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 25;


class ProjectAllocation extends Component {
  render() {
    return (
      <div className="bootstrap-wrapper">
        {/* <div className="app-container container"> */}
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Defect Tracker</h1>
            </div>
            
          </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <h4>Panel Bar Container</h4>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                <Button type="primary"  onClick={() => this.setModal1Visible(true)}>Roll Allocation</Button>
                <Button type="primary"  onClick={() => this.setModal1Visible(true)}>DeAllocation</Button>
                  <Table/>
                  {/* <h3>dcdcsd</h3> */}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <AllocationChart/>
                  {/* <h2>dcdscsd</h2> */}
                </div>
                             
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                   <Col span={6}>
                        <br/>
                        {/* <PageHeader title="Project Remaining Time"/> */}
                        <h5 className="mt-5">Project Remaining Time</h5>
                        <div
                            style={{
                            padding: 30,
                            background: '#fff',
                            minHeight: 307
                        }}>
                            <Row gutter={16}>
                                <Col
                                    span={12}
                                    style={{
                                    marginTop: 15
                                }}>
                                    <Countdown title="Library System" value={deadline4} format="D - H:m:s"/>
                                </Col>
                                <Col
                                    span={12}
                                    style={{
                                    marginTop: 15
                                }}>
                                    <Countdown title="Defect System" value={deadline} format="D - H:m:s"/>
                                </Col>
                                <Col
                                    span={12}
                                    style={{
                                    marginTop: 15
                                }}>
                                    <Countdown title="HRM System" value={deadline1} format="D - H:m:s"/>
                                </Col>
                                <Col
                                    span={12}
                                    style={{
                                    marginTop: 15
                                }}>
                                    <Countdown
                                        title="Leave Management System"
                                        value={deadline2}
                                        format="D - H:m:s"/>
                                </Col>
                                <Col
                                    span={24}
                                    style={{
                                    marginTop: 15
                                }}>
                                    <Countdown
                                        title="School Management System"
                                        value={deadline3}
                                        format="D - H:m:s"/>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                {/* </Row> */}
                </div>
              </div>
              
            </div>
          </div>
          <h4 style={{ display: 'none' }}>Dialog Shown/Hidden with Logic</h4>
        </div>
    //   </div>
    );
  }
}

export default ProjectAllocation;