import { atomWithStorage } from "jotai/utils";

export type themeOptions = 'blueTheme' | 'greenTheme' | 'redTheme' | 'orangeTheme' | 'yellowTheme'

var colorThemeAtom = atomWithStorage<themeOptions>('theme', 'blueTheme')

export default colorThemeAtom
