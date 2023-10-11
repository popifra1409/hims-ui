import React from "react";
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useField } from "formik";

const RadioSelectWrapper = ({ name, options, ...otherProps }) => {
    const [field] = useField(name);

    return (
        <RadioGroup {...field} {...otherProps}>
            {options.map((option) => (
                <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                />
            ))}
        </RadioGroup>
    );
};

export default RadioSelectWrapper;
