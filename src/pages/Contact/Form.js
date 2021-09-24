import React from 'react'
import FormsWrapper, { showFieldError } from '../../components/common/Formik'
import * as Yup from "yup"
import { Input, Button } from 'reactstrap'

const validation = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email()
        .required("Required"),
    phone: Yup.string()
        .required("Required"),
    message: Yup.string()
        .required("Required")
})

export default function Form() {
    return (
        <FormsWrapper
            values={{
                fullName: '',
                email: '',
                phone: '',
                message: ''
            }}
            handleSubmit={()=>{

            }}
            validationSchema={validation}>
            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        handleSubmit } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <h3 className="mb-0">Send us a Message</h3>
                            <p>Follow your orders in real time, from shipping to delivery</p>
                            <div className="form-group mt-0">
                                <label className="mb-0">Full name</label>
                                <Input
                                    name="fullName"
                                    type="text"
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={errors.fullName && touched.fullName}
                                />
                                {showFieldError("fullName", errors, touched)}
                            </div>
                            <div className="form-group mt-0">
                                <label className="mb-0">Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={errors.email && touched.email}
                                />
                                {showFieldError("email", errors, touched)}
                            </div>

                            <div className="form-group mt-0">
                                <label className="mb-0">Phone Number</label>
                                <Input
                                    name="number"
                                    type="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={errors.phone && touched.phone}
                                />
                                {showFieldError("phone", errors, touched)}
                            </div>
                            <div className="form-group mt-0">
                                <label className="mb-0">Message</label>

                                <Input
                                    name="message"
                                    type="textarea"
                                    rows="3"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={errors.message && touched.message}
                                />
                                {showFieldError("message", errors, touched)}
                            </div>
                            <div className="form-group mt-0 text-center">
                                <Button color="dark" block disabled={isSubmitting} className="px-2 py-3  rounded-pill" type="submit">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                            </div>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
