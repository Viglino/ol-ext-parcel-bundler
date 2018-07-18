/** Main index
 * Test ol-ext extension with parcel bundler
 */
import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'

/* Force fullpage reload on module changes 
 * to prevent side effects on the map.
 */
if (module.hot) {
  module.hot.accept(function () {
    location.reload();
  });
}
/* end of hot reload */

/* Create a map with layers */
import './js/map'
import './js/layers'

/* Controls */
import './js/control/permalink'
// import './js/control/swipe'
import './js/control/layerswitcher'
import './js/control/search'

import './js/control/bar'

import './js/interaction/select'

/* Interactions */

/* Filters */

/* Source/layer */

/* Style */

/* Overlay */

/* Feature animation */