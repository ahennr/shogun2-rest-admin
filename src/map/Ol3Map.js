import React from 'react';
import { connect } from 'react-redux';
import { changeMapView } from '../actions/MapViewChangeAction';

// TODO:
// 1) defaults (create)
// 2) moveend

var ol = require('openlayers');
import './ol.css';
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
    console.log('this.props.onMapViewChange registered');
    map.on('moveend', this.props.onMapMoveEnd);

    this.map = map;
  }

  // componentWillReceiveProps(newProps) {
  //   console.log("new props receibed");
  //   if (newProps.zoom && newProps.zoom !== this.props.zoom) {
  //     this.map.getView().animate({
  //       zoom: newProps.zoom
  //     });
  //
  //     this.map.getView().setZoom(newProps.zoom);
  //   }
  //   if (newProps.center) {
  //     this.map.getView().setCenter(newProps.center);
  //   }
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMapMoveEnd: function(newObj) {
      let mapCenter = newObj.map.getView().getCenter();
      let mapZoom = newObj.map.getView().getZoom();
      let mapExtent = newObj.map.getView().calculateExtent(newObj.map.getSize());
      let mapRotation= newObj.map.getView().getRotation();
      console.log('will dispatch new view: ',mapCenter, mapZoom, mapExtent, mapRotation);
      dispatch(changeMapView(mapCenter, mapZoom, mapExtent, mapRotation));
    }
  };
};

Ol3Map.propTypes = {
  center: React.PropTypes.arrayOf(React.PropTypes.number),
  zoom: React.PropTypes.number,
  extent: React.PropTypes.arrayOf(React.PropTypes.number),
  rotation: React.PropTypes.number,
  onMapMoveEnd: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(Ol3Map);
