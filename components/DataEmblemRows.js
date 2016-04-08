/* eslint-disable no-unused-vars*/
import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import _ from 'lodash';
import { SimpleSelect } from 'react-selectize';
/* eslint-enable no-unused-vars*/
/* eslint-disable func-names */


class DataEmblemRows extends React.Component {
  constructor() {
    super();
    this.state = { 1: 'Nohr Prince/Princess', 2: 'Fighter', 3: 'Knight', 4: 'Wyvern Rider',
                   5: 'Malig Knight', 6: 'Fighter', 7: 'Knight', 8: 'Troubadour', 9: 'Maid',
                   10: 'Wolfskin', 11: 'Mercenary', 12: 'Dark Knight', 13: 'Outlaw',
                   14: 'Dark Mage', 15: 'Dark Mage', 16: 'Cavalier', 17: 'Mercenary',
                   18: 'Paladin' };
  }
  changeClass(id, clicked) {
    this.setState({ [id]: clicked });
  }
  render() {
    const that = this;
    const classes = this.props.class;
    const rows = this.props.char.map(function (person) {
      let customClass = '';
      let filteredClass = '';
      const properties = person.class.map(function(classes) {
        return { label: classes, value: classes }
      });
      console.log(properties)
      _.filter(classes, function (filter) {
        if (filter.title === that.state[person.id]) {
          filteredClass = filter;
        }
      });


      if (person.id % 2 === 0) {
        customClass += 'bg-info';
      }
      return (
        <Row className={customClass} key={person.id}>
          <Col xs={2}>
            <label>{person.name}</label>
          </Col>
          <Col xs={2}>
            <SimpleSelect
              options={properties}
              defaultValue={properties[0]}
              theme="material"
              onChange={that.changeClass.bind(that, person.id)}/>
          </Col>
          <Col xs={1}>
            <label>{person.hp + filteredClass.hp}</label>
          </Col>
          <Col xs={1}>
            <label>{person.str + filteredClass.str}</label>
          </Col>
          <Col xs={1}>
            <label>{person.mag + filteredClass.mag}</label>
          </Col>
          <Col xs={1}>
            <label>{person.skl + filteredClass.skl}</label>
          </Col>
          <Col xs={1}>
            <label>{person.spd + filteredClass.spd}</label>
          </Col>
          <Col xs={1}>
            <label>{person.lck + filteredClass.lck}</label>
          </Col>
          <Col xs={1}>
            <label>{person.def + filteredClass.def}</label>
          </Col>
          <Col xs={1}>
            <label>{person.res + filteredClass.res}</label>
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
