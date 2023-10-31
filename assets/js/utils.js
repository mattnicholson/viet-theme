export const getRandomInteger = (min, max, randFunc = Math.random) => {
  return Math.floor(randFunc() * (max - min + 1)) + min
}

export const getRandomItemFromArray = (array, exclude) => {
  const excludeArray = Array.isArray(exclude)
    ? exclude
    : exclude
    ? [exclude]
    : null
  const options = excludeArray
    ? array.filter((item) => !excludeArray.includes(item))
    : array
  return options[Math.floor(Math.random() * options.length)]
}

export const getArrayOfIntegers = (total, startAt = 0) => {
  const array = []
  for (let i = startAt; i < total; i += 1) {
    array.push(i)
  }
  return array
}

export const shuffleArray = (array) => {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const getRandomItemFromObject = (object, exclude) => {
  const values = Object.values(object)
  return getRandomItemFromArray(values, exclude)
}

export const trimTrailingSlash = (string) => {
  return string.replace(/\/$/, '')
}

export const convertObjectToInlineStyle = (stylesObject) => {
  const stylesInline = Object.keys(stylesObject).reduce((acc, key) => {
    const value = stylesObject[key]
    return `${acc} ${key}: ${value};`
  }, '')
  return stylesInline
}

export const testIfIos = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

export const testIfMobile = (includeIpad = false) => {
  const isIos = testIfIos()
  if (isIos && includeIpad) return true
  let isMobile = false // initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    // eslint-disable-next-line
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true
  }
  return isMobile
}

export const waitForImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}
export const waitForImages = (srcs) => {
  return Promise.all(srcs.map((src) => waitForImage(src)))
}

export const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const debounce = (func, delay = 100) => {
  let timer
  return (event) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, delay, event)
  }
}

/**
 * Returns a object representation of the transform string supplied. It parses the string and
 * converts them to an object.
 * @param transformString String containing the transforms
 */
export const parseTransformValues = (transformString) => {
  const transforms = transformString.trim().split(/\) |\)/)
  // Handle "initial", "inherit", "unset".
  if (transforms.length === 1) {
    return {
      [transforms[0]]: true,
    }
  }

  /**
   * Converts string values to number when the unit is pixel or parsable. Returns a string when the
   * unit is not pixel or not parsable.
   * @param value Value of a transform
   */
  const parsePixelValues = (value) => {
    if (value.endsWith('px')) return parseFloat(value)
    if (!Number.isNaN(Number(value))) return Number(value)
    return value
  }

  return transforms.reduce((acc, transform) => {
    if (!transform) return acc
    const [name, transformValue] = transform.split('(')
    const valueArray = transformValue.split(',')
    const values = valueArray.map((val) => {
      return parsePixelValues(
        val.endsWith(')') ? val.replace(')', '') : val.trim()
      )
    })
    const value = values.length === 1 ? values[0] : values
    return {
      ...acc,
      ...{ [name]: value },
    }
  }, {})
}

export const getNextSibling = (elem, selector) => {
  // Get the next sibling element
  let sibling = elem.nextElementSibling
  // If there's no selector, return the first sibling
  if (!selector) return sibling
  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.nextElementSibling
  }
}

export const testElIsVisible = ({ el, boundingRect, winHeight, docHeight }) => {
  const rect = boundingRect || el.getBoundingClientRect()
  const W_HEIGHT = winHeight || window.innerHeight
  const D_HEIGHT = docHeight || document.documentElement.clientHeight
  const viewHeight = Math.max(D_HEIGHT, W_HEIGHT)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

export const convertHexToRgb = (hex, alpha = 1) => {
  const hexValue = hex.replace('#', '')
  const r = parseInt(hexValue.substring(0, 2), 16)
  const g = parseInt(hexValue.substring(2, 4), 16)
  const b = parseInt(hexValue.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
