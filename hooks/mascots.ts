// Pixel-art squad (16x16 grid), one character per model. Each pixel is [x, y, width, height, color].

import type { Model } from '../types'
type Px = readonly [number, number, number, number, string]

const ORANGE = '#D97757'
const DARK = '#1F1E1D'

// Shared body: torso, arms, legs and eyes.
const BODY: Px[] = [
  [2, 5, 12, 7, ORANGE],
  [0, 7, 2, 2, ORANGE],
  [14, 7, 2, 2, ORANGE],
  [3, 12, 1, 2, ORANGE],
  [5, 12, 1, 2, ORANGE],
  [10, 12, 1, 2, ORANGE],
  [12, 12, 1, 2, ORANGE],
  [5, 7, 1, 2, DARK],
  [10, 7, 1, 2, DARK],
]

const OUTFIT: Record<Model, Px[]> = {
  // Worker: yellow hard hat and a wrench.
  haiku: [
    [4, 2, 8, 2, '#F2C230'],
    [2, 4, 12, 1, '#F2C230'],
    [7, 1, 2, 1, '#F2C230'],
    [5, 3, 1, 1, '#FFE27A'],
    [-1, 5, 1, 4, '#9AA0A6'],
    [-2, 4, 3, 1, '#9AA0A6'],
  ],
  // Manager: glasses, blue tie and a briefcase.
  sonnet: [
    [4, 6, 3, 1, DARK],
    [9, 6, 3, 1, DARK],
    [7, 6, 2, 1, DARK],
    [7, 9, 2, 1, '#2B4C7E'],
    [7, 10, 2, 2, '#2B4C7E'],
    [16, 9, 3, 3, '#7A4B2A'],
    [17, 8, 1, 1, '#7A4B2A'],
    [3, 3, 10, 2, '#3C3C3C'],
    [2, 4, 12, 1, '#3C3C3C'],
  ],
  // Sergeant: green army helmet and a little rifle.
  opus: [
    [3, 2, 10, 3, '#4B5D2A'],
    [2, 4, 12, 1, '#3A4820'],
    [5, 3, 2, 1, '#6B7F3A'],
    [10, 3, 1, 1, '#6B7F3A'],
    [15, 1, 1, 7, '#5A5A5A'],
    [14, 7, 2, 1, '#5A5A5A'],
    [15, 8, 2, 3, '#7A4B2A'],
    [15, 0, 1, 1, '#2E2E2E'],
  ],
}

/** The character as SVG; `jumping` makes it bounce. */
export function svgMascot(model: Model, jumping: boolean): string {
  const px = [...BODY, ...OUTFIT[model]]
    .map(([x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`)
    .join('')
  const hop = jumping
    ? `<animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0; 0 0" keyTimes="0;0.35;0.7;1" dur="0.9s" repeatCount="indefinite"/>`
    : `<animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="2.4s" repeatCount="indefinite"/>`
  const shadow = jumping
    ? `<ellipse cx="8" cy="14.6" rx="6" ry="0.8" fill="#000" opacity="0.18"><animate attributeName="rx" values="6;3.5;6;6" keyTimes="0;0.35;0.7;1" dur="0.9s" repeatCount="indefinite"/></ellipse>`
    : `<ellipse cx="8" cy="14.6" rx="6" ry="0.8" fill="#000" opacity="0.15"/>`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -5 23 21" shape-rendering="crispEdges">${shadow}<g>${hop}${px}</g></svg>`
}

/** Countdown clock: big number inside a ring that empties. */
export function svgClock(left: number, total: number): string {
  const r = 26
  const turn = 2 * Math.PI * r
  const frac = Math.max(0, Math.min(1, left / total))
  const color = left <= 2 ? '#D9534F' : left <= 4 ? '#F2A93B' : '#3FA34D'
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<circle cx="32" cy="32" r="${r}" fill="#FFF8F0" stroke="#E5DED6" stroke-width="6"/>` +
    `<circle cx="32" cy="32" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" ` +
    `stroke-dasharray="${(turn * frac).toFixed(1)} ${turn.toFixed(1)}" transform="rotate(-90 32 32)"/>` +
    `<rect x="29" y="1" width="6" height="5" rx="1" fill="#8A8178"/>` +
    `<text x="32" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="${color}">${left}</text>` +
    `</svg>`
  )
}
