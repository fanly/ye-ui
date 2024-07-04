type buttonPrefix = 'button'

export const staticbutton: Record<`${buttonPrefix}-${string}` | buttonPrefix, string> = {
  // config
  'button-default-variant': 'button-solid',
  'button-loading-icon': 'i-loading',

  // base
  'button': 'bg-transparent text-0.875em leading-5 gap-0.42857142857142855em button-rectangle rounded-md inline-flex justify-center items-center button-disabled font-semibold cursor-pointer',
  'button-disabled': 'disabled:n-disabled',
  'button-label': '',
  'button-icon-label': 'text-1.191em',
  'button-leading': '-ml-0.14285714285714285em text-1.191em',
  'button-trailing': '-mr-0.14285714285714285em text-1.191em',
  'button-loading': 'animate-spin text-1.191em',

  // options
  'button-block': 'w-full',
  'button-reverse': 'flex-row-reverse',
  'button-rectangle': 'px-0.7142857142857143em py-0.42857142857142855em',
  'button-square': 'p-0.42857142857142855em',

  // variants
  'button-solid-white': 'bg-base text-base ring-1 ring-base ring-inset shadow-sm button-focus hover:bg-muted',
  'button-ghost-white': 'text-base button-focus hover:bg-$c-gray-50',
  'button-solid-gray': 'bg-$c-gray-50 text-$c-gray-800 ring-1 ring-base ring-inset shadow-sm button-focus hover:bg-$c-gray-100',
  'button-ghost-gray': 'text-$c-gray-600 button-focus hover:bg-$c-gray-100',
  'button-soft-gray': 'text-$c-gray-600 bg-$c-gray-50 button-focus hover:bg-$c-gray-100',
  'button-link-gray': 'text-$c-gray-500 button-focus hover:text-$c-gray-950 hover:underline underline-offset-4',
  'button-solid-black': 'bg-$c-gray-950 text-inverted shadow-sm button-focus hover:bg-$c-gray-900',
  'button-link-black': 'text-$c-gray-950 button-focus hover:underline underline-offset-4',
  'button-text-black': 'text-$c-gray-950 button-focus hover:text-$c-gray-900',
  'button-text-gray': 'text-$c-gray-600 button-focus hover:text-$c-gray-900',
}

export const dynamicbutton: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^button-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-600 dark:focus-visible:outline-${c}-500 focus-visible:outline-2 focus-visible:outline-offset-2`],

  // variants
  [/^button-solid(-(\S+))?$/, ([, , c = 'primary']) => `button-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^button-text(-(\S+))?$/, ([, , c = 'primary']) => `button-focus-${c} text-${c}-600 dark:text-${c}-500 hover:text-${c}-500 dark:hover:text-${c}-400`],
  [/^button-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent button-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^button-soft(-(\S+))?$/, ([, , c = 'primary']) => `button-focus-${c} text-${c}-600 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^button-ghost(-(\S+))?$/, ([, , c = 'primary']) => `button-focus-${c} text-${c}-600 dark:text-${c}-400 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^button-link(-(\S+))?$/, ([, , c = 'primary']) => `button-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline underline-offset-4`],
]

export const button = [
  ...dynamicbutton,
  staticbutton,
]
