const isObject = v => v && typeof v === 'object'

export const merge = (objects, overwrite) => {
  return objects.reduce((prev, curr) => {
    for (let k of Object.keys(curr)) {
      if (Array.isArray(prev[k]) && Array.isArray(curr[k])) {
        if (!overwrite) prev[k] = [...prev[k], ...curr[k]]
        else prev[k] = curr[k]
      } else if (isObject(prev[k]) && isObject(curr[k])) {
        prev[k] = merge([prev[k], curr[k]], overwrite)
      } else prev[k] = curr[k]
    }
    return prev
  }, {})
}
