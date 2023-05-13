
import IBook from './Interfaces/IBook'

//This is ok
const ok: IBook = {
    Author : "Rita Wolfenstein",
    Pages : 1
}

//Here I do not have everything that is required
const bad: IBook = {
    Author : "Rita Wolf"
}
