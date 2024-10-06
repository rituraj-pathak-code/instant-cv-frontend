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
        
        break;
      }
    }
  } else {
    const firstErrorKey = Object.keys(currentError)[0];
    const firstErrorMessage = currentError[firstErrorKey];
    toast.error(firstErrorMessage);
  }
};




export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
