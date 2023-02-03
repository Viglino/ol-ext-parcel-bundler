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
import './js/layer/layers'

/* Controls */
import './js/control/permalink'
// import './src/js/control/swipe'
import './js/control/layerswitcher'
import './js/control/search'

import './js/control/bar'

import './js/interaction/select'

/* Interactions */

/* Filters */
import './js/filter/crop'

/* Source/layer */

/* Style */

/* Overlay */

/* Feature animation */
