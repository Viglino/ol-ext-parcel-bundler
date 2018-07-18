/** LayerSwitcher control
 * Add a LayerSwitcher control to the map
 */
import map from '../map'

/* LayerSwitcher control */
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'

const switcher = new LayerSwitcher();
map.addControl(switcher);