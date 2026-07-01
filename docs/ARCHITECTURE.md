# History OS / ARCHITECTURE

Updated: 2026-05-24

---

# 1. Purpose

History OS is a civilization navigation system.

It visualizes history through:

- Time
- Space
- Meaning
- Civilization links
- Nation layers
- Human narratives

This project is not a normal history website.

It is designed as:

# Civilization Meaning OS

---

# 2. Core Concept

The system is based on this model:

```txt
Person        = Point
Civilization  = Line
Nation        = Surface
Time          = Timeline
Earth         = Visual UI
Core          = Meaning Gravity Field

The globe is not the main body.

The main body is:

Civilization Meaning Network
3. Current File Structure
global-history-os/

data/
  events.js
  persons.js
  geo/countries.geojson

docs/
  CURRENT_STATE.md
  PROJECT_STATUS.md
  ARCHITECTURE.md

sandbox/
  index.html
  main.js
  renderGlobe.js
  geoJsonLayer.js
  polygonLayerManager.js

README.md
4. Layer Architecture

History OS is divided into four main layers.

Meaning Layer
Geo Layer
Render Layer
UI Layer
5. Meaning Layer
File
data/events.js
Role

The Meaning Layer defines historical meaning.

It contains:

People
World events
Start year
End year
Event title
Description
Location
Civilization relations
GeoLayer reference
Example
{
  id:'civil_war',
  type:'world',
  startYear:1861,
  endYear:1865,
  title:'南北戦争',
  year:'1861 — 1865',
  description:'アメリカ国家構造を再定義した内戦。',
  color:'#ff5e5e',
  lat:38.90,
  lng:-77.03,
  placeName:'Washington',
  geoLayer:'usa_civil_war',
  relatedEvents:[]
}
Important Rule

events.js should describe:

meaning
time
relations
location

It should NOT contain large polygon data.

Large shape data belongs to the Geo Layer.

6. Geo Layer
File
data/geoLayers.js
Role

The Geo Layer defines shapes.

It contains:

Nation polygons
Border polygons
Temporary simplified GeoJSON
Future historical GeoJSON references
Current State

Current geo data is simplified.

It is not accurate GIS yet.

It is used for:

concept testing
nation surfaces
border layer testing
Example
japan_1854:{
  type:'Feature',
  properties:{
    color:'rgba(255,217,94,0.24)'
  },
  geometry:{
    type:'Polygon',
    coordinates:[[
      [129,31],
      [132,34],
      [136,35]
    ]]
  }
}
Future Goal

Move toward real GeoJSON.

Example future structure:

geo/
  japan_1854.geojson
  ryukyu_1854.geojson
  ryukyu_1879.geojson
  usa_1861_confederacy.geojson
  europe_1815.geojson
7. Render Layer
File
sandbox/renderGlobe.js
Role

The Render Layer draws the civilization world.

It controls:

Globe rendering
City labels
Label backside hiding
Civilization arcs
Nation surfaces
Wave rings
Border layers
renderYear(year)
toggleBorders()
Important Functions
renderYear(year)

Updates the globe state by year.

It rebuilds:

labels
arcs
rings
polygons
border visibility
toggleBorders()

Turns border layer ON/OFF.

8. UI Layer
File
sandbox/index.html
Role

The UI Layer controls interaction.

It contains:

WORLD EVENTS panel
PERSON panel
Timeline slider
Camera navigation
renderUI(year)
Important Rule

Camera movement is currently stable when handled directly in index.html:

world.pointOfView({
  lat:event.lat,
  lng:event.lng,
  altitude:1.6
},1200);

Do not abstract this yet.

Previous abstraction caused camera movement failure.

9. Data Flow
Timeline Flow
User moves yearSlider
        ↓
year changes
        ↓
renderYear(year)
        ↓
globe updates
        ↓
renderUI(year)
        ↓
left / right panels update
Globe Flow
events.js
        ↓
renderGlobe.js
        ↓
filter by startYear / endYear
        ↓
labels / arcs / rings / polygons
        ↓
globe state changes
UI Flow
events.js
        ↓
index.html
        ↓
filter by startYear / endYear
        ↓
WORLD EVENTS
PERSON timeline
10. Time System

Events use:

startYear
endYear
Persistent Event
startYear:1854

This remains visible after 1854.

Period Event
startYear:1861,
endYear:1865

This is visible only from 1861 to 1865.

Example:

Civil War
1861 → visible
1865 → visible
1866 → hidden
11. Current Visual Systems
Points

Used for:

people
places
cities

Displayed as:

city labels
Lines

Used for:

civilization links
movement
influence routes

Displayed as:

arcsData
Surfaces

Used for:

nation events
state changes
historical territories

Displayed as:

polygonsData
Waves

Used for:

historical impact
national shock
civilization afterglow

Displayed as:

ringsData
12. Border System

Current border system:

BORDERS button
↓
toggleBorders()
↓
modern_borders layer ON/OFF

Current borders are simplified test geometry.

Future borders should be real GeoJSON.

13. Backside Label System

The label system uses:

DOM overlay
+
3D vector visibility test

Important logic:

const pos =
world.getCoords(
label.lat,
label.lng,
0.02
);

const cameraDir =
camera.position.clone().normalize();

const pointDir =
new THREE.Vector3(
pos.x,
pos.y,
pos.z
).normalize();

const dot =
cameraDir.dot(pointDir);

if(dot < 0.12){
  label.el.style.display = 'none';
}

This is critical.

Do not replace with getScreenCoords() only.

14. Current Stable Features
Globe rendering
City labels
Backside label hiding
Civilization arcs
Timeline slider
renderYear(year)
renderUI(year)
WORLD EVENTS panel
PERSON panel
Camera movement
startYear / endYear
Nation polygons
Wave rings
Border ON/OFF
GeoLayer separation
15. Current Known Weaknesses
1. Geo accuracy

Current polygons are temporary.

They are not accurate historical boundaries.

2. Sandbox complexity

sandbox/ is now complex.

Future cleanup is needed.

3. Camera control

Camera movement currently works best from index.html.

Do not refactor too early.

4. Layer system

The layer system is still primitive.

Future work should separate:

borders
territories
empires
religions
trade networks
war fronts
16. Future Direction
Phase 1

Stabilize current sandbox.

Phase 2

Introduce real GeoJSON for a small test case.

Recommended first candidates:

Japan
Ryukyu
Civil War South
Phase 3

Create proper layer modules.

Example:

systems/layerSystem.js
Phase 4

Add search.

Example:

"Maritime Civilization"

The system should reconstruct:

ports
routes
empires
people
trade zones
Phase 5

Meaning priority engine.

The system decides:

what to show
what to hide
what to emphasize
17. Development Rule

Always use:

stable copy
↓
experiment
↓
merge if successful

Never destroy stable version.

ZIP backup is required.

18. Instruction Rule

The user is a beginner-level coder.

When giving code instructions, use:

1. Search text
2. From here
3. To here
4. Delete
5. Full replacement

Or:

Full file replacement

Avoid vague instructions such as:

add this below

unless absolutely clear.

19. Core Design Principle

History OS must not become an overloaded information map.

The principle is:

Aesthetics of Reduction

Show less.

Mean more.

20. Final Definition

History OS is:

A time-based civilization layer engine
for navigating meaning across history.
