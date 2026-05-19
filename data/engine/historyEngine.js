export function generateWorldState(
  data,
  year
) {

  // =====================================
  // 指定年以前のイベント抽出
  // =====================================

  const visibleEvents =
    data.events.filter(
      event => event.year <= year
    );


  // =====================================
  // ID高速検索Map
  // =====================================

  const eventMap =
    new Map();

  visibleEvents.forEach(event => {

    eventMap.set(
      event.id,
      event
    );

  });


  // =====================================
  // Arc生成
  // =====================================

  const arcs = [];


  visibleEvents.forEach(sourceEvent => {

    const consequences =
      sourceEvent
        ?.causality
        ?.consequences || [];


    consequences.forEach(targetId => {

      const targetEvent =
        eventMap.get(targetId);

      // 指定年にまだ存在しない場合
      if (!targetEvent) return;


      arcs.push({

        startLat: sourceEvent.lat,
        startLng: sourceEvent.lng,

        endLat: targetEvent.lat,
        endLng: targetEvent.lng,

        color:
          getCategoryColor(
            sourceEvent.category
          ),

        altitude:
          calculateAltitude(
            sourceEvent.importance
          ),

        sourceId: sourceEvent.id,

        targetId: targetEvent.id,

        title:
          `${sourceEvent.title} → ${targetEvent.title}`,

        causal: true

      });

    });

  });


  // =====================================
  // 出力State
  // =====================================

  return {

    year,

    visibleEvents,

    arcs

  };

}


// =====================================
// CATEGORY COLOR
// =====================================

function getCategoryColor(category) {

  const colors = {

    politics: '#ff5555',

    diplomacy: '#ffaa00',

    science: '#55aaff',

    culture: '#55ffcc',

    military: '#ff2222',

    migration: '#ffffff'

  };

  return (
    colors[category] ||
    '#cccccc'
  );

}


// =====================================
// ARC ALTITUDE
// =====================================

function calculateAltitude(
  importance = 0.5
) {

  return (
    0.08 +
    importance * 0.25
  );

}
