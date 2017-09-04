import React from 'react';
import { connect } from 'react-redux';
import { changeMapView } from '../actions/MapViewChangeAction';
import PropTypes from 'prop-types';

// TODO:
// 1) defaults (create)
// 2) moveend

var ol = require('openlayers');
import './olmap.css';

class Ol3Map extends React.Component {

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
    return (
      <div className="olmap" id="map"></div>
    );
  }

  componentDidMount() {
    console.log('Component map did mount');
    let mapView = new ol.View({
      center: [this.props.record.center.x, this.props.record.center.y],
      zoom: this.props.record.zoom,
      projection: 'EPSG:' + this.props.record.projection
    });

    let ows = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    let map = new ol.Map({
      target: 'map',
      layers: [ows],
      view: mapView
    });

    // register ol-listener to handle user-initiated prop updates
    map.on('moveend', this.props.onMapMoveEnd);

    this.map = map;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMapMoveEnd: function(newObj) {
      let mapCenter = newObj.map.getView().getCenter();
      let mapZoom = newObj.map.getView().getZoom();
      let mapExtent = newObj.map.getView().calculateExtent(newObj.map.getSize());
      let mapRotation= newObj.map.getView().getRotation();
      dispatch(changeMapView(mapCenter, mapZoom, mapExtent, mapRotation));
    }
  };
};

Ol3Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  extent: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number,
  onMapMoveEnd: PropTypes.func,
  record: PropTypes.object
};

export default connect(null, mapDispatchToProps)(Ol3Map);
