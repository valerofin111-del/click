import { atomWithStorage } from "jotai/utils";

type cardBackground = 'hsla(0, 0%, 20%, 1.00)' | 'hsla(0, 0%, 60%, 1.00)'

var cardThemeAtom = atomWithStorage<cardBackground>('cardTheme' , 'hsla(0, 0%, 20%, 1.00)')

export default cardThemeAtom
