import React from 'react';
import ReactDOM from 'react-dom';

class DataEmblem extends React.Component {
  loadJSONFromServer() {
    $.ajax({
      url: 'api/fe',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ data });
        console.log(data);
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      },
    });
  }

  componentDidMount() {
    this.loadJSONFromServer();
  }
  constructor() {
    super();
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="container">
          <div class="col-xs-6 text-center">
              <label>Testing</label>
          </div>
          <div class="col-xs-6 text-center">
              <label>Bootstrap</label>
          </div>
      </div>
   );
  }
}


ReactDOM.render(
  <DataEmblem />,
  document.getElementById('container')
);
