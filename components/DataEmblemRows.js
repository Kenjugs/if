/* eslint-disable no-unused-vars*/
import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
/* eslint-enable no-unused-vars*/

class DataEmblemRows extends React.Component {
  render() {
    const rows = this.props.data.map(function (person) {
      let customClass = '';
      if (person.id % 2 === 0) {
        customClass += 'bg-info';
      }
      return (
        <Row className={customClass} key={person.id}>
          <Col xs={2}>
            <label>{person.name}</label>
          </Col>
          <Col xs={2}>
            <DropdownList className="btn-mini" defaultValue={person.class[0]} data={person.class} />
          </Col>
          <Col xs={1}>
            <label>{person.hp}</label>
          </Col>
          <Col xs={1}>
            <label>{person.str}</label>
          </Col>
          <Col xs={1}>
            <label>{person.mag}</label>
          </Col>
          <Col xs={1}>
            <label>{person.skl}</label>
          </Col>
          <Col xs={1}>
            <label>{person.spd}</label>
          </Col>
          <Col xs={1}>
            <label>{person.lck}</label>
          </Col>
          <Col xs={1}>
            <label>{person.def}</label>
          </Col>
          <Col xs={1}>
            <label>{person.res}</label>
          </Col>
        </Row>
      );
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
}

module.exports = DataEmblemRows;
