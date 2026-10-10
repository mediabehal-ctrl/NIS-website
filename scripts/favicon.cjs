#!/usr/bin/env node
/* favicon.svg — Nijjar mark, preserved palette */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#1F3A2D"/>
  <path d="M18 46 L28 22 L38 44 L46 26 L54 46" stroke="#FAF6EE" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="28" cy="22" r="3" fill="#B04A32"/>
  <circle cx="54" cy="46" r="3" fill="#B04A32"/>
</svg>
`;
require("fs").writeFileSync(__dirname + "/favicon.svg", svg);
