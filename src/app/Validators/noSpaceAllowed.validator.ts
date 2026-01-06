import { AbstractControl, FormControl } from "@angular/forms";

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

    static checkUsername(control: AbstractControl):Promise<any>{
        return userNameNotAllowed(control.value);
    }
}

function userNameNotAllowed(userName: string){
    
    const exisitngUserNameList = ["ashish01","amal02","ashwin03"];

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(exisitngUserNameList.includes(userName)){
                resolve({usernameCheck:true});
                    
            } else {
                resolve(null);
            }
        }, 5000);
    })
}