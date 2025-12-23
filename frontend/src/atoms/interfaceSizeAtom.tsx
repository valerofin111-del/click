import { atomWithStorage } from "jotai/utils"

export type interfaceSize = 1 | 2 | 3 | 4

var interfaceSizeAtom = atomWithStorage<interfaceSize>('interfaceSize' , 4)

export default interfaceSizeAtom
