import React from 'react'
import FormsWrapper, { showFieldError } from '../../../components/common/Formik'
import * as Yup from "yup"
import { Input, Button } from 'reactstrap'

const validation = Yup.object().shape({
    email: Yup.string().email()
        .required("Required"),
    orderNumber: Yup.string()
        .required("Required"),
})

export default function Form() {
    return (
        <FormsWrapper
            values={{
                email: '',
                orderNumber: '',
            }}
            handleSubmit={() => {

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
                            <h1 className="">Track your orders</h1>
                            <p>Follow your orders in real time, from shipping to delivery</p>

                            <div className="form-group ">
                                <label className="">Email Address</label>
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

                            <div className="form-group ">
                                <label className="">Order Number</label>
                                <Input
                                    name="orderNumber"
                                    type="text"
                                    value={values.orderNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={errors.orderNumber && touched.orderNumber}
                                />
                                {showFieldError("orderNumber", errors, touched)}
                            </div>
                            <div className="form-group  text-center">
                                <Button color="dark" block disabled={isSubmitting} className="p-2  rounded-pill" type="submit">
                                    {isSubmitting ? 'Sending...' : 'Track Order'}
                                </Button>

                            </div>

                            <div className="card bg-grey my-4">
                                <div className='card-body d-flex align-items-center'>
                                    <img width="40" className="mr-3" src={require('../../../assets/images/svgs/info.svg').default} />
                                    <p className="m-0 ">Check your mail for detailed tracking information
                                        and updates as well</p>
                                </div>
                            </div>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
