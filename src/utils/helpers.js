export const isValidUrl = str => {
  try {
    new URL(str)
    return true
  } catch (_) {
    return false
  }
}
