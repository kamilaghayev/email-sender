import { Box, Button, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { _publicKey, _serviceID, _templateID } from "../../constants/EmailJs";
import { useContext } from "react";
import { SnackContext } from "../../hoc/SnackModal/SnackModal";

const EmailValidationSchema = Yup.object().shape({
    from_name: Yup.string()
        .min(4, 'Name must be at least 4 characters')
        .required('Name is required'),
    to_email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    message: Yup.string()
        .min(10, 'Text must be at least 10 characters')
        .required('Text is required')
})

const EmailForm = () => {
    const {openSnackModal} = useContext(SnackContext);

    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography color='primary'  variant='h5'>Email Send</Typography>
            <Formik
                initialValues={{ from_name: '', to_email: '', message: '' }}
                validationSchema={EmailValidationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    
                    emailjs.send( _serviceID, _templateID, values, _publicKey)
                        .then((response) => {
                            console.log('SUCCESS!', response.status, response.text);
                            openSnackModal();
                            resetForm();
                            setSubmitting(false)
                        }, (error) => {
                            console.log(error);
                            setSubmitting(false)
                        });
                }}
            >
                {({isSubmitting}) =>(
                <Form>
                    <ErrorMessage name="from_name" component="div" />
                    <Field type='text' name='from_name'>
                        {({field, meta}: any) => (
                            <TextField
                                {...field}
                                sx={{width: '100%', mt: 1}}
                                label='Name'
                                variant="outlined"
                                error={meta.touched && !!meta.error}
                                helperText={meta.touched && meta.error}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="to_email" component="div" />
                    <Field type='email' name='to_email'>
                        {({field, meta}: any) => (
                            <TextField
                                {...field}
                                sx={{width: '100%', mt: 1}}
                                label='Email'
                                variant="outlined"
                                error={meta.touched && !!meta.error}
                                helperText={meta.touched && meta.error}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="message" component="div" />
                    <Field type='text' name='message'>
                        {({field, meta}: any) => (
                            <TextField
                                {...field}
                                sx={{width: '100%', mt: 1}}
                                multiline
                                label='Message'
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
                        sx={{mt: 2, width: '100%'}}
                    >
                        Email Send
                    </Button>
                </Form>)}
            </Formik>
        </Box>
    )
}

export default EmailForm