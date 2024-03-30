import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";

const EmailValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Name must be at least 4 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    text: Yup.string()
        .min(10, 'Text must be at least 10 characters')
        .required('Text is required')
})

const EmailForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', text: '' }}
            validationSchema={EmailValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values, setSubmitting);

            }}
        >
            {({isSubmitting}) =>(
            <Form>
                <ErrorMessage name="name" component="div" />
                <Field type='text' name='name'>
                    {({field, meta}: any) => (
                        <TextField
                            {...field}
                            sx={{width: '100%', my: 1}}
                            label='Name'
                            variant="outlined"
                            error={meta.touched && !!meta.error}
                            helperText={meta.touched && meta.error}
                        />
                    )}
                </Field>
                <ErrorMessage name="email" component="div" />
                <Field type='email' name='email'>
                    {({field, meta}: any) => (
                        <TextField
                            {...field}
                            sx={{width: '100%', my: 1}}
                            label='Email'
                            variant="outlined"
                            error={meta.touched && !!meta.error}
                            helperText={meta.touched && meta.error}
                        />
                    )}
                </Field>
                <ErrorMessage name="text" component="div" />
                <Field type='text' name='text'>
                    {({field, meta}: any) => (
                        <TextField
                            {...field}
                            sx={{width: '100%', my: 1}}
                            multiline
                            label='Email Text'
                            variant="outlined"
                            error={meta.touched && !!meta.error}
                            helperText={meta.touched && meta.error}
                        />
                    )}
                </Field>
                <Button 
                    variant='contained' 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    Email Send
                </Button>
            </Form>)}
        </Formik>
    )
}

export default EmailForm