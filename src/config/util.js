import { toast } from "react-toastify";

export const errorDisplayForResumeForms = (currentError) => {
    console.log(currentError)
  if (Array.isArray(currentError)) {
    for (const error of currentError) {
      if (error) {
        const firstErrorKey = Object.keys(error)[0];
        const firstErrorMessage = error[firstErrorKey];
        console.log(firstErrorMessage)
        if(Array.isArray(firstErrorMessage)){
            for (const firstError of firstErrorMessage) {
                console.log(firstError)
                if(firstError){
                    toast.error(firstError);
                    break;
                }
                
            }
            
        } else {
            toast.error(firstErrorMessage);
        }
        
        break; // Stop after the first error;
      }
    }
  } else {
    const firstErrorKey = Object.keys(currentError)[0];
    const firstErrorMessage = currentError[firstErrorKey];
    toast.error(firstErrorMessage);
  }
};
