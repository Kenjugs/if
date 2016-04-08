/* eslint-disable no-unused-vars */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import ReactDOM from 'react-dom';
import DataEmblemRows from './DataEmblemRows.js';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';


class DataEmblem extends React.Component {
  constructor() {
    super();
    this.state = { char: [], class: [] };
  }

  loadCharFromServer() {
    $.ajax({
      url: 'api/fe-char',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ char: data });
      }, error: (xhr, status, err) => {
        console.error(status, err.toString());
      },
    });
  }

  loadClassFromServer() {
    $.ajax({
      url: 'api/fe-class',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ class: data });
      }, error: (xhr, status, err) => {
        console.error(status, err.toString());
      },
    });
  }

  componentDidMount() {
    this.loadCharFromServer();
    this.loadClassFromServer();
  }

  render() {
    return (
      <Grid fluid className="text-center">
        <Row className="row bg-primary">
          <Col xs={2}>
            <label>Name</label>
          </Col>
          <Col xs={2}>
            <label>Class</label>
          </Col>
          <Col xs={1}>
            <label>HP</label>
          </Col>
          <Col xs={1}>
            <label>STR</label>
          </Col>
          <Col xs={1}>
            <label>MAG</label>
          </Col>
          <Col xs={1}>
            <label>SKL</label>
          </Col>
          <Col xs={1}>
            <label>SPD</label>
          </Col>
          <Col xs={1}>
            <label>LCK</label>
          </Col>
          <Col xs={1}>
            <label>DEF</label>
          </Col>
          <Col xs={1}>
            <label>RES</label>
          </Col>
        </Row>
        <DataEmblemRows char={this.state.char} class={this.state.class}/>
      </Grid>
    );
  }
}

ReactDOM.render(<DataEmblem />, document.getElementById('container'));
