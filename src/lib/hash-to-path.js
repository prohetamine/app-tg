function base64ToHex(base64) {
  const raw = atob(base64)
  let result = ''
  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16).padStart(2, '0')
    result += hex
  }
  return result
}

function hashToPath(base64Hash) {
  const cleaned = base64Hash.trim()
  const hex = base64ToHex(cleaned)
  return hex
}

export default hashToPath