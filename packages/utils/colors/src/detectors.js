export const hex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/i
export const hex3 = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/i

export const hexa = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/i

export const hexa4 = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/i

export const rgb =
  /^rgb\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/i

export const rgba =
  /^rgba?\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\/?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/i

export const hsl =
  /^hsl\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/i

export const hsla =
  /^hsla?\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*[,/]?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/i

export const hwb =
  /^hwb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s+(\d*\.?\d+)%\s+(\d*\.?\d+)%(?:\s*\/\s*)?(\d+(?:\.\d+)?%?|\.\d+%?)?\s*\)?$/i

export const hwba =
  /^hwb?\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*[,/]?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/i

export const hsb =
  /^hsb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/i

export const hsv =
  /^hsv\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/i
