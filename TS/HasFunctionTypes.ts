import IHasFunctionTypes from "./Interfaces/IHasFunctionTypes";

const hasBoth: IHasFunctionTypes ={
    property: ()=> "",
    method (){
        return "";
    }
}

hasBoth.method(); //Ok
hasBoth.property(); //Ok