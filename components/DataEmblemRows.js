/* eslint-disable no-unused-vars*/
import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import _ from 'lodash';
import { SimpleSelect } from 'react-selectize';
/* eslint-enable no-unused-vars*/


class DataEmblemRows extends React.Component {
  constructor() {
    super();
    this.state = { 1: 'Nohr Prince/Princess', 2: 'Songstress', 3: 'Maid',
                   4: 'Great Knight', 5: 'Onmyoji', 6: 'Butler', 7: 'Ninja',
                   8: 'Villager', 9: 'Adventurer', 10: 'Cavalier', 102: 'Monk',
                   103: 'Samurai', 104: 'Diviner', 105: 'Samurai',
                   106: 'Sky Knight', 107: 'Kitsune', 108: 'Ninja',
                   109: 'Spear Fighter', 110: 'Diviner', 111: 'Kinshi Knight',
                   112: 'Oni Savage', 113: 'Swordmaster', 114: 'Ninja',
                   115: 'Shrine Maiden', 116: 'Wyvern Lord', 117: 'Archer',
                   118: 'Sky Knight', 119: 'Archer', 120: 'Mechanist',
                   202: 'Fighter', 203: 'Knight', 204: 'Wyvern Rider',
                   205: 'Malig Knight', 206: 'Fighter', 207: 'Knight',
                   208: 'Troubadour', 209: 'Maid', 210: 'Wolfskin',
                   211: 'Mercenary', 212: 'Dark Knight', 213: 'Outlaw',
                   214: 'Dark Mage', 215: 'Dark Mage', 216: 'Cavalier',
                   217: 'Mercenary', 218: 'Paladin' };
  }
  changeClass(id, clicked) {
    this.setState({ [id]: clicked.value });
  }
  render() {
    const that = this;
    const classes = this.props.class;
    let counter = 0;
    const rows = this.props.char.map(person => {
      let customClass = 'vertical-align text-center';
      const properties = person.class.map(__class => ({ label: __class, value: __class }));
      const chosenClass = classes[that.state[person.id]];
      if (counter % 2 === 0) {
        customClass += ' bg-info';
      }
      counter++;
      return (
        <Row className={customClass} key={person.id}>
          <Col xs={1}>
            <label>{person.name}</label>
          </Col>
          <Col xs={3}>
            <SimpleSelect
              options={properties}
              defaultValue={properties[0]}
              theme="material"
              onValueChange={that.changeClass.bind(that, person.id)} />
          </Col>
          <Col xs={1}>
            <label>{person.hp + chosenClass.hp}</label>
          </Col>
          <Col xs={1}>
            <label>{person.str + chosenClass.str}</label>
          </Col>
          <Col xs={1}>
            <label>{person.mag + chosenClass.mag}</label>
          </Col>
          <Col xs={1}>
            <label>{person.skl + chosenClass.skl}</label>
          </Col>
          <Col xs={1}>
            <label>{person.spd + chosenClass.spd}</label>
          </Col>
          <Col xs={1}>
            <label>{person.lck + chosenClass.lck}</label>
          </Col>
          <Col xs={1}>
            <label>{person.def + chosenClass.def}</label>
          </Col>
          <Col xs={1}>
            <label>{person.res + chosenClass.res}</label>
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
