import { defaultSplitRE } from '@unocss/core'
import type { Extractor } from '@unocss/core'

interface ExtractorOptions {
  /**
   * @default []
   * @description List of prefixes to extract from the vue-script code.
   */
  prefixes?: string[]
}

function generateSelectors(prefix: string, values: string[]): string[] {
  // eg convert prefix to kebab-case
  prefix = prefix.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  return values
    .filter(v => Boolean(v) && v !== ':')
    .map(v => `[${prefix}~="${v}"]`)
}

function splitCodeWithArbitraryVariants(code: string, prefixes: string[]): string[] {
  const result: string[] = []
  const camelCasePrefixes = prefixes.map(prefix => prefix.replace(/-([a-z])/g, (_, c) => c.toUpperCase()))

  prefixes = [...prefixes, ...camelCasePrefixes]

  for (const prefix of prefixes) {
    const regex = new RegExp(`^\\s*${prefix}:\\s+'.*',?\\s*$`, 'gm')
    const matches = code.match(regex)

    if (!matches)
      continue

    for (const match of matches) {
      const values = match.replace(/^.*:\s*'(.*)',?\s*$/, '$1').split(defaultSplitRE)
      const selectors = generateSelectors(prefix, values)

      result.push(...selectors)
    }
  }

  return result
}

function extractor(options?: ExtractorOptions): Extractor {
  return {
    name: '@una-ui/extractor',
    order: 0,
    async extract({ code }) {
      return splitCodeWithArbitraryVariants(code, options?.prefixes ?? [])
    },
  }
}

export default extractor
