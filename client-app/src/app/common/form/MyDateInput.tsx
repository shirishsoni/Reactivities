import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';

export default function MyTextInput(props:Partial<ReactDatePickerProps>) { // Partial makes everything inside optional
    const [field, meta, helpers] = useField(props.name!); //Explicitely telling that we know name will be there so shut up
    return (
        // !! casts things to boolean
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker 
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}