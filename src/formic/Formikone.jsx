
import { useFormik } from 'formik'
import React from 'react'
import { YupSchema } from './YupSchema'

function Formikone() {

    let initialVal = {
        name: '', myemail:'', mypass: '', myage: '', cpass: ''
    }

    let formikLib = useFormik({
        initialValues: initialVal,
        validationSchema: YupSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
        }
    })
    console.log(formikLib);

    let { values, handleSubmit, handleChange, handleBlur, touched, errors } = formikLib

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Enter Name</label>
                    <input
                        type="text"
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* true  &&    true        = true */}
                    {
                        errors && errors.name && touched.name ? <h5> {errors.name} </h5> : ''
                    }
                </div>

                <div>
                    <label htmlFor="">Enter Email</label>
                    <input
                        type="text"
                        name='myemail'
                        value={values.myemail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors && errors.myemail && touched.myemail ? <h5> {errors.myemail} </h5> : ''
                    }
                </div>

                <div>
                    <label htmlFor="">Enter Age</label>
                    <input
                        type="number"
                        name='myage'
                        value={values.myage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors && errors.myage && touched.myage ? <h5> {errors.myage} </h5> : ''
                    }
                </div>

                <div>
                    <label htmlFor="">Enter Password</label>
                    <input
                        type="text"
                        name='mypass'
                        value={values.mypass}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {
                        errors && errors.mypass && touched.mypass ? <h5>{errors.mypass} </h5> : ''
                    }
                </div>

                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input
                        type="text"
                        name='cpass'
                        value={values.cpass}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {
                        errors && errors.cpass && touched.cpass ? <h5>{errors.cpass} </h5> :''
                    }
                </div>

                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default Formikone