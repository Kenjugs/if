import React from 'react';

class DataEmblemRows extends React.Component {
  render() {
    console.log(this.props);
    let rows = this.props.data.map(function (person) {
      let customClass = "row";

      if (person.id % 2 === 0) {
        customClass += " bg-info";
      }

      return (
        <div className={customClass} key={person.id}>
          <div className="col-xs-2">
            <label>{person.name}</label>
          </div>
          <div className="col-xs-2 text-left">
            <label>{person.class}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.hp}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.str}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.mag}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.skl}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.spd}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.lck}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.def}</label>
          </div>
          <div className="col-xs-1">
            <label>{person.res}</label>
          </div>
        </div>
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
