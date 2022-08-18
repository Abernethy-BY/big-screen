/*
 * @Author: By
 * @Date: 2022-08-13 10:45:51
 * @LastEditTime: 2022-08-18 22:12:50
 * @LastEditors: By
 * @Description: ,
 * @FilePath: \big-screen-vue3\unocss.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  rules: [
    ['-I', { '': '!important' }],
    [/^z-(\d+)$/, ([, d]) => ({ 'z-index': `${d}` })],
    [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
    [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
    [/^wPE-(\d+)$/, ([, d]) => ({ width: `${d}%` })],
    [/^hPE-(\d+)$/, ([, d]) => ({ height: `${d}%` })],

    ['layouts', { width: '100vw', height: '100vh' }],
    ['box-until', { width: '100%', height: '100%' }],
    ['box-center', { 'display': 'flex', 'flex-direction': 'column', 'flex': '1', 'position': 'relative' }],

    ['flex', { display: 'flex' }],
    ['flex-row-between', { 'justify-content': 'space-between' }],
    ['flex-row-center', { 'justify-content': 'center' }],
    ['flex-row-start', {}],
    ['flex-row-end', { 'justify-content': 'flex-end' }],
    ['flex-column-between', { 'flex-direction': 'column', 'justify-content': 'space-between' }],
    ['flex-column-center', { 'flex-direction': 'column', 'justify-content': 'center' }],
    ['flex-column-start', { 'flex-direction': 'column' }],
    ['flex-column-end', { 'flex-direction': 'column', 'justify-content': 'space-end' }],
    ['cross-axis-stretch', { 'align-items': 'stretch' }],
    ['cross-axis-center', { 'align-items': 'center' }],
    ['cross-axis-start', {}],
    ['cross-axis-end', { 'align-items': 'flex-end' }],
    [/^fx-(\d+)$/, ([, d]) => ({ 'flex-shrink': `${d}` })],
    [/^flex-(\d+)$/, ([, d]) => ({ flex: `${d}` })],

    [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
    [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
    [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
    [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
    [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
    [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
    [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
    [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],

    [/^fs-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': `${d}px` })],
    [/^fw-(\d+)$/, ([, d]) => ({ 'font-weight': `${d}` })],
    [/^fw-(\d+)$/, ([, d]) => ({ 'font-weight': `${d}` })],

    [/^position-(\w+)$/, ([, w]) => ({ position: `${w}` })],
    ['po-r', { position: 'relative' }],
    ['po-a', { position: 'absolute' }],
    [/^pot-(\d+)$/, ([, d]) => ({ top: `${d}px` })],
    [/^pob-(\d+)$/, ([, d]) => ({ bottom: `${d}px` })],
    [/^pol-(\d+)$/, ([, d]) => ({ left: `${d}px` })],
    [/^por-(\d+)$/, ([, d]) => ({ right: `${d}px` })],

    [/^bw-(\d+)$/, ([, d]) => ({ 'border-width': `${d}px` })],
    [/^bs-(\w+)$/, ([, w]) => ({ 'border-style': `${w}` })],

    [/^br-(\d+)$/, ([, d]) => ({ ' border-radius': `${d}px` })],

    ['cursor-p', { cursor: 'pointer' }],

  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
