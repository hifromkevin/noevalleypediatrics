export function relativePath (value) {
  const apiRoot = 'http://noevalleypediatrics.hifromkevin.com'
  return value.replace(apiRoot, '')
}

export function formatPhone (value) {
  return value.replace(/[^0-9]/g, '')
              .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

// Refactor to handle html string
// export function truncate (value, length) {
//   if (value.length < length) {
//     return value
//   }
//   length = length - 3
//   return value.substring(0, 30) + '...'
// }
