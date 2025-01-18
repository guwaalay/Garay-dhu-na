import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'd',
  'dh'
  'g',
  'h',
  'i',
  'ii',
  'j',
  'l',
  'm',
  'n',
  'ng'
  'u',
  'uu',
  'w',
  'r',
  'rr',
  'y',
  '-',
  '.',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
