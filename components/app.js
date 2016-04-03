import React from 'react';
import ReactDOM from 'react-dom';
import DataEmblemRows from './DataEmblemRows.js'

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
            <label>Name</label>
          </div>
          <div className="col-xs-2 text-left">
            <label>Class</label>
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

ReactDOM.render(<DataEmblem />, document.getElementById('container'));
