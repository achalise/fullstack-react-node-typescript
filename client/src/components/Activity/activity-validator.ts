export const validate = (field: Field): ValidationResult => {
    let res = {status: true} as ValidationResult;
    switch (field.name) {
        case 'name':
            res = validateName(field);
            break;
        case 'type':
            res = validateType(field);    
            break;
        default:

    }
    return res;
}

const validateName = (field: Field) => {
    let res = {status: true} as ValidationResult;
    let value = field.value;
    if (!value || value.length < 3) {
        res.status = false;
        res.message = `Name must be at least 3 characters`;
    } 
    return res;
}

const validateType = (field: Field) => {
    let res = {status: true} as ValidationResult;
    let value = field.value;
    if (!value || value.length < 3) {
        res.status = false;
        res.message = `Password must be at least 5 characters`;
    } 
    return res;
}

export interface Field {
    name: string;
    value: string;
}

export interface ValidationResult {
    status: boolean;
    message?: string;
}

