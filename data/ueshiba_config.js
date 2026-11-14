// data/ueshiba_config.js — 合氣道Focus の設定値（1か所にまとめる）。
// 行事は「植芝盛平フォーカス／合氣道」の行事カレンダー（aikido-history-os）と同じデータ（data/events.json）を読む。
// 行事を入れるのはカレンダー側の1か所だけ。Focus は読むだけ（書き換えない）ので、入れた行事は両方のサイトに出る。
//
// 場所は「サイトの根からの道」で書く。公開でも手元でも同じ形で届くように：
//   公開：https://akirameikyou.github.io/aikido-history-os/…   と   https://akirameikyou.github.io/global-history-os/ueshiba/…
//   手元：C:\GitHub を根にして配る（launch.json「history-os-both」）と /aikido-history-os/… と /_worktrees/ueshiba-focus/ueshiba/…
// 公開の場所が変わったら、ここ（AIKIDO_SITE）だけを書き換える。
export const AIKIDO_SITE = '/aikido-history-os/';
export const EVENTS_URL = AIKIDO_SITE + 'data/events.json';       // 行事（告知資料）
export const CALENDAR_URL = AIKIDO_SITE + 'ja/calendar/';         // カレンダーで確認（?ym=YYYY-MM でその月）
export const ICS_DIR = AIKIDO_SITE + 'calendar/evt/';              // 行事ごとの .ics（<id>.ics）
// NOW で出す期間：今日の何日前から、何か月先まで
export const NOW_WINDOW = { pastDays: 31, aheadMonths: 13 };
