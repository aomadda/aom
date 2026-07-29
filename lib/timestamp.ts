/** Timestamp helper kept outside React components to satisfy react-hooks/purity. */
export function getTimestamp(): number {
  return Date.now()
}
