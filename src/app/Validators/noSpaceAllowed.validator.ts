import { FormControl } from "@angular/forms";

// ------------variable import function assigned
// export const noSpaceAllowed = (formControl: FormControl)=>{
//     if(formControl.value!=null && formControl.value.indexOf(' ')!=-1){
//         return {noSpaceAllowed:true};
//     }
//     return null;
// }  

export class CustomValidators {
    static noSpaceAllowed(formControl: FormControl){
        if(formControl.value!=null && formControl.value.indexOf(' ')!=-1){
            return {noSpaceAllowed:true};
        }
        return null;
    }
}