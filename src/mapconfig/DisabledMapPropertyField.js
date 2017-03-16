import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';

class DisabledMapPropertyField extends Component {

  render() {
    const { record, sourceProp, zoom} = this.props;

    console.log(zoom)
    return record && record[sourceProp] ? <TextField
        disabled={true}
        floatingLabelText={sourceProp}
        value={this.props[sourceProp] ? this.props[sourceProp]: record[sourceProp]}
      />: <span/>;
  }
}

DisabledMapPropertyField.propTypes = {
  record: PropTypes.object,
  sourceProp: PropTypes.string,
  zoom: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    zoom: state.mapView.zoom
  };
};

export default connect(mapStateToProps, null)(DisabledMapPropertyField);
