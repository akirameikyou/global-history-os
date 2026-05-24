# History OS / PROJECT STATUS
Updated: 2026-05-24

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT PHASE
━━━━━━━━━━━━━━━━━━━━━━━━━━

History OS is currently evolving from:

"Historical Globe"

into:

# Civilization Meaning OS

The system now supports:

- Time
- Space
- Civilization links
- Nation layers
- UI synchronization
- Camera navigation

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT STABLE FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Globe rendering

✅ DOM overlay city labels

✅ Backside label hiding
(getCoords + normalize + dot)

✅ Civilization arcs

✅ Timeline slider

✅ Left panel synchronization

✅ Right panel synchronization

✅ Camera movement

✅ startYear / endYear

✅ Nation wave effects

✅ Nation polygon layers

✅ GeoLayer separation

✅ Border ON/OFF system

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━

History OS
│
├─ data/
│  ├─ events.js
│  └─ geoLayers.js
│
├─ sandbox/
│  ├─ index.html
│  └─ renderGlobe.js
│
└─ future/
   ├─ geo/
   ├─ ui/
   └─ systems/

━━━━━━━━━━━━━━━━━━━━━━━━━━
# FILE RESPONSIBILITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━

## data/events.js

Meaning layer.

Contains:

- historical events
- startYear / endYear
- relations
- lat/lng
- event types
- geoLayer references

Important:

events.js
should NOT contain large polygon data anymore.

━━━━━━━━━━━━━━━━━━━━━━━━━━

## data/geoLayers.js

Shape layer.

Contains:

- nation polygons
- borders
- future GeoJSON
- layer definitions

Current state:
temporary simplified GeoJSON structure.

━━━━━━━━━━━━━━━━━━━━━━━━━━

## sandbox/renderGlobe.js

Globe engine layer.

Responsible for:

- Globe()
- labels
- arcs
- rings
- polygons
- layer rendering
- renderYear()
- border toggle

Important:

This is now the core rendering engine.

━━━━━━━━━━━━━━━━━━━━━━━━━━

## sandbox/index.html

UI layer.

Responsible for:

- WORLD EVENTS panel
- PERSON panel
- timeline slider
- camera movement
- UI rendering

Important:

Camera movement is currently stable ONLY when:

world.pointOfView()

is directly called inside index.html.

Do NOT abstract this yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━
# IMPORTANT SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━

## Timeline System

yearSlider
↓
renderYear(year)
+
renderUI(year)

This creates:

"Time-based civilization state changes"

━━━━━━━━━━━━━━━━━━━━━━━━━━

## Layer System

Current layer types:

- nation polygons
- border lines
- civilization arcs
- civilization waves

Future:

- empire layers
- religion layers
- trade layers
- warfront layers

━━━━━━━━━━━━━━━━━━━━━━━━━━

## Meaning Structure

Person
=
Point

Civilization
=
Line

Nation
=
Surface

Time
=
Timeline

Earth
=
UI

Core
=
Meaning gravity field

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT GEO STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━

Current polygons are:

# simplified temporary geo layers

NOT accurate GIS.

Future direction:

GeoJSON-based historical layers.

━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

1854:
Ryukyu ≠ Japan

1879:
Ryukyu = Japan

Meaning:
territorial identity changes with time.

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT STABLE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━

ALWAYS:

stable copy
↓
experiment
↓
merge if successful

ZIP backup required.

━━━━━━━━━━━━━━━━━━━━━━━━━━

Never destroy stable version.

━━━━━━━━━━━━━━━━━━━━━━━━━━

User is beginner-level coder.

Instructions should always use:

1. Search text
2. From here
3. To here
4. Delete
5. Full replacement

OR:

# Full file replacement

━━━━━━━━━━━━━━━━━━━━━━━━━━
# CURRENT DESIGN PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━

History OS is NOT:

a history encyclopedia.

It IS:

# a civilization navigation system.

━━━━━━━━━━━━━━━━━━━━━━━━━━

Important:

Reduce information density.

Avoid effect overload.

Maintain:

# "the aesthetics of reduction"

━━━━━━━━━━━━━━━━━━━━━━━━━━
# NEXT TARGETS
━━━━━━━━━━━━━━━━━━━━━━━━━━

① Better border rendering

② GeoJSON integration

③ Historical territory switching

④ Layer focus system

⑤ Search engine

⑥ Meaning priority engine

⑦ Civilization density visualization

━━━━━━━━━━━━━━━━━━━━━━━━━━
# LONG TERM VISION
━━━━━━━━━━━━━━━━━━━━━━━━━━

Search:
"Maritime Civilization"

↓

System dynamically reconstructs:

- ports
- trade routes
- empires
- explorers
- cultural flows

This is the future direction of:

# Civilization Meaning OS
