import 'react';
const checkValidation = (name, stateName, type, validations, onValidationError, stateObj) => {
    let errorMessage = "";
    const fieldValue = stateObj[stateName];
    if (!fieldValue || (type !== "password" && !fieldValue.trim())) {
        errorMessage = `${name} cant be empty`;
    }
    else if (validations && validations.length) {
        validations.reverse().forEach(validation => {
            const { type, value, error, otherStateName, otherFieldName } = validation;

            if (type === "regex" && !fieldValue.match(value)) {
                errorMessage = `invalid ${name}, ${error}`;
            } else if (type === "minLength" && fieldValue.length < value) {
                errorMessage = `${name} should have atleast ${value} characters`;
            } else if (type === "equalToOtherField" && fieldValue !== stateObj[otherStateName]) {
                errorMessage = `${name} should match to ${otherFieldName}`;
            } else {
                errorMessage = ``;
            }
        });
    }
    return onValidationError({ stateName, errorMessage });
};

const validateEntireDataset = (fields = [], stateObj) => {
    let errors = stateObj.errors;
    if (!fields.length) return {};
    fields.forEach(fieldSpec => {
        const stateName = fieldSpec.stateName;
        const fieldName = fieldSpec.name;
        const fieldValue = stateObj[stateName];
        if (fieldSpec.isRequired) { // required field error
            if (!fieldValue || (fieldSpec.type === "password" && !fieldValue.trim())) {
                errors[stateName] = `${fieldName} cant be empty`;
            }
            else errors[stateName] = '';
        }
        if (fieldValue && fieldSpec.validations && fieldSpec.validations.length) {
            fieldSpec.validations.reverse().forEach(validation => {
                const { type, value, error, otherStateName, otherFieldName } = validation;

                if (type === "regex" && !fieldValue.match(value)) {
                    errors[stateName] = `invalid ${fieldName}, ${error}`;
                } else if (type === "minLength" && fieldValue.length < value) {
                    errors[stateName] = `${fieldName} should have atleast ${value} characters`;
                } else if (type === "equalToOtherField" && fieldValue !== stateObj[otherStateName]) {
                    errors[stateName] = `${fieldName} should match to ${otherFieldName}`;
                } else {
                    errors[stateName] = ``;
                }
            });
        }
    })
    return errors;
}
export default {
    checkValidation,
    validateEntireDataset
}
