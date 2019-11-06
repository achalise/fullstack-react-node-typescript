import { useState } from "react";
import { Field, ValidationResult } from "../components/Activity/activity-validator";

export const useFormValidator = (initialState: any, validate: (field:Field) => ValidationResult) => {
    const [state, setState] = useState(initialState);
    const handleChange = (event: any) => {
        let validationResult = validate({name: event.target.name, value: event.target.value});
        let error = {} as {[key:string]: ValidationResult};
        error[event.target.name] = validationResult;
        setState({...state, [event.target.name]: event.target.value, error: error});
    } 
    return [state, handleChange];
}
