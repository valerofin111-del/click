import { atom } from "jotai";

export type themeOptions = 'blueTheme' | 'greenTheme' | 'redTheme' | 'orangeTheme' | 'yellowTheme'

var themeAtom = atom<themeOptions>('blueTheme')

export default themeAtom
