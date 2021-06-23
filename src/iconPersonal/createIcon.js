import L from 'leaflet'
import Icon from '../assets/aki.png'

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: [38, 95]
  });
}

export function getMarkerIcon() {
  return createIcon(Icon);
}
