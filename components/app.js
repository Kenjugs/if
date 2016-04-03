import React from 'react';
import ReactDOM from 'react-dom';

class DataEmblem extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }
  
  loadJSONFromServer() {
    $.ajax({
      url: 'api/fe',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      }, error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }
  
  componentDidMount() {
    this.loadJSONFromServer();
  }
  
  render() {
    return (
      <div className="container text-center">
        <div className="row bg-primary">
          <div className="col-xs-2">
            <label>ID</label>
          </div>
          <div className="col-xs-2 text-left">
            <label>Name</label>
          </div>
          <div className="col-xs-1">
            <label>HP</label>
          </div>
          <div className="col-xs-1">
            <label>STR</label>
          </div>
          <div className="col-xs-1">
            <label>MAG</label>
          </div>
          <div className="col-xs-1">
            <label>SKL</label>
          </div>
          <div className="col-xs-1">
            <label>SPD</label>
          </div>
          <div className="col-xs-1">
            <label>LCK</label>
          </div>
          <div className="col-xs-1">
            <label>DEF</label>
          </div>
          <div className="col-xs-1">
            <label>RES</label>
          </div>
        </div>
        <DataEmblemRows data={this.state.data} />
      </div>
    );
  }
}

class DataEmblemRows extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }
  
  render() {
    var rows = this.props.data.map(function(person) {
      var customClass = "row";
      
      if (person.id % 2 == 0) {
        customClass += " bg-info";
      }
      
      return (
        <div className={customClass} key={person.id}>
          <div className="col-xs-2">
            <label>{person.id}</label>
          </div>
          <div className="col-xs-2 text-left">
            <label>{person.name}</label>
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

ReactDOM.render(<DataEmblem />, document.getElementById('container'));
