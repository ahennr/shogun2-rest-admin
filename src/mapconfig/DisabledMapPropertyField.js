import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class DisabledMapPropertyField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapView: {
        center: [0,0],
        zoom: 0,
        rotation: 0,
        extent: []
      }
    };
  }

  render() {
    const {record, sourceProp, center} = this.props;
    let val = this.props[sourceProp];
    if (sourceProp === 'centerx') {
      val = center[0] || record.center.x;
    } else if (sourceProp === 'centery') {
      val = center[1] || record.center.y;
    }
    return record ? <TextField disabled={true} floatingLabelText={this.props.title ? this.props.title : sourceProp} value={val}/> : null;
  }
}

const mapStateToProps = (state) => {
  return {
    zoom: state.mapView.mapView ? state.mapView.mapView.zoom : 2,
    rotation: state.mapView.mapView ? state.mapView.mapView.rotation : 0,
    center: state.mapView.mapView ? state.mapView.mapView.center : [0, 0],
    extent: state.mapView.mapView ? state.mapView.mapView.extent : [0, 0, 1, 1]
  };
};

DisabledMapPropertyField.propTypes = {
  record: PropTypes.object,
  sourceProp: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.arrayOf(PropTypes.number),
  extent: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number,
  title: PropTypes.string
};

export default connect(mapStateToProps)(DisabledMapPropertyField);
