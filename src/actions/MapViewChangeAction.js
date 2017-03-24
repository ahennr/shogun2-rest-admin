export const CHANGE_MAPVIEW = 'CHANGE_MAPVIEW';

export const changeMapView = (currentCenter, currentZoom, currentExtent, currentRotation) => ({
  type: CHANGE_MAPVIEW,
  mapView: {
    center: currentCenter,
    zoom: currentZoom,
    extent: currentExtent,
    rotation: currentRotation
  },
});
