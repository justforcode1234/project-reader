import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
  ],

  rules: [
    // a-b-c-d
    ['text-ellipsis-1', {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap'
    }],
    ['text-ellipsis-2', {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'display': '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical'
    }],
    ['over-hidden', {
      'overflow': 'hidden'
    }],
    ['relative', {
      'position': 'relative'
    }],
    ['absolute', {
      'position': 'absolute'
    }],
    ['fixed', {
      'position': 'fixed'
    }],
    // 自定义宽度规则
    [/^w-(\d+)$/, ([, num]) => ({ width: `${num}px` })],
    [/^h-(\d+)$/, ([, num]) => ({ height: `${num}px` })],
    [/^lh-(\d+)$/, ([, num]) => ({ 'line-height': `${num}px` })],
    [/^t-(\d+)$/, ([, num]) => ({ 'font-size': `${num}px` })],
    [/^fw-(\d+)$/, ([, num]) => ({ 'font-weight': `${num}` })],
    [/^size-(\d+)$/, ([, num]) => ({ width: `${num}px`, height: `${num}px` })],

    [/^p-(\d+)$/, ([, num]) => ({ 'padding': `${num}px` })],
    [/^pl-(\d+)$/, ([, num]) => ({ 'padding-left': `${num}px` })],
    [/^pr-(\d+)$/, ([, num]) => ({ 'padding-right': `${num}px` })],
    [/^pt-(\d+)$/, ([, num]) => ({ 'padding-top': `${num}px` })],
    [/^pb-(\d+)$/, ([, num]) => ({ 'padding-bottom': `${num}px` })],

    [/^m-(\d+)$/, ([, num]) => ({ 'margin': `${num}px` })],
    [/^ml-(\d+)$/, ([, num]) => ({ 'margin-left': `${num}px` })],
    [/^mr-(\d+)$/, ([, num]) => ({ 'margin-right': `${num}px` })],
    [/^mt-(\d+)$/, ([, num]) => ({ 'margin-top': `${num}px` })],
    [/^mb-(\d+)$/, ([, num]) => ({ 'margin-bottom': `${num}px` })],
    [/^r-(\d+)$/, ([, num]) => ({ 'border-radius': `${num}px` })],

    [/^left-(\d+)$/, ([, num]) => ({ 'left': `${num}px` })],
    [/^right-(\d+)$/, ([, num]) => ({ 'right': `${num}px` })],
    [/^top-(\d+)$/, ([, num]) => ({ 'top': `${num}px` })],
    [/^bottom-(\d+)$/, ([, num]) => ({ 'bottom': `${num}px` })],

    [/^left-f-(\d+)$/, ([, num]) => ({ 'left': `-${num}px` })],
    [/^right-f-(\d+)$/, ([, num]) => ({ 'right': `-${num}px` })],
    [/^top-f-(\d+)$/, ([, num]) => ({ 'top': `-${num}px` })],
    [/^bottom-f-(\d+)$/, ([, num]) => ({ 'bottom': `-${num}px` })],


    [/^px-(\d+)$/, ([, num]) => ({ 'padding-left': `${num}px`, 'padding-right': `${num}px` })],
    [/^py-(\d+)$/, ([, num]) => ({ 'padding-top': `${num}px`, 'padding-bottom': `${num}px` })],
    [/^mx-(\d+)$/, ([, num]) => ({ 'margin-left': `${num}px`, 'margin-right': `${num}px` })],
    [/^my-(\d+)$/, ([, num]) => ({ 'margin-top': `${num}px`, 'margin-bottom': `${num}px` })],
  ]
})