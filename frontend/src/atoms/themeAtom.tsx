import { atomWithStorage } from "jotai/utils";

export type themeOptions = 'blueTheme' | 'greenTheme' | 'redTheme' | 'orangeTheme' | 'yellowTheme'

var themeAtom = atomWithStorage<themeOptions>('theme', 'blueTheme')

export default themeAtom
