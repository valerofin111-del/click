import { atom } from "jotai";

export interface authInputsTypes {
    name: string,
    key: string
}

var authInputAtom = atom<authInputsTypes>({name: '', key: ''})

export default authInputAtom
