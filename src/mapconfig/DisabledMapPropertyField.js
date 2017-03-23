import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';

class DisabledMapPropertyField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //const {record, sourceProp, zoom} = this.props;
    return <TextField disabled={true} floatingLabelText={this.props.sourceProp} value={5}/>;

    // return record && record[sourceProp]
    //   ? <TextField disabled={true} floatingLabelText={sourceProp} value={this.props.zoom
    //       ? this.props.zoom
    //       : record[sourceProp]}/>
    //   : <span/>;
  }
}

const mapStateToProps = (state) => {
  return {
    zoom: state.mapView.zoom
  };
};

DisabledMapPropertyField.propTypes = {
  record: PropTypes.object,
  sourceProp: PropTypes.string,
  zoom: PropTypes.number
};

export default connect(mapStateToProps)(DisabledMapPropertyField);
