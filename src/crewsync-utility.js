// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from 'rxjs'

export function publicApiFunction() {
    console.log('utility called !!!!!')
}


export const user$ = new BehaviorSubject({})