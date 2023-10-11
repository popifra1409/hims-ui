import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useField, useFormikContext } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format } from 'date-fns'

const DateTimePickerWrapper = ({ name, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);

    const handleChange = (date) => {
        setFieldValue(name, date);
    };

    const formatDate = (date) => {
        return format(date, "MM/dd/yyyy");
    };

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        format: "dd/MM/yyyy",
        value: field.value ? formatDate(field.value) : null,
        fullWidth: true,
        inputVariant: "standard",
        onChange: handleChange,
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker {...configDateTimePicker} />
        </MuiPickersUtilsProvider>
    );
};

export default DateTimePickerWrapper;
