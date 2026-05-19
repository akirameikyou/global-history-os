// engine/historyEngine.js

export function generateWorldState(events, currentYear) {
    // データが届いていない場合は空の状態を返す（これでエラーが消えます）
    if (!events || !Array.isArray(events)) return { visibleEvents: [], arcs: [] };

    const visibleEvents = events.filter(e => e.year <= currentYear);
    
    // 因果関係（線）の計算
    const arcs = [];
    visibleEvents.forEach(event => {
        if (event.causality && event.causality.consequences) {
            event.causality.consequences.forEach(targetId => {
                const target = events.find(e => e.id === targetId && e.year <= currentYear);
                if (target) {
                    arcs.push({
                        startLat: event.lat, startLng: event.lng,
                        endLat: target.lat, endLng: target.lng
                    });
                }
            });
        }
    });

    return { visibleEvents, arcs };
}
