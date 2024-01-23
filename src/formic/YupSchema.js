import * as Jam from 'yup'

export const YupSchema = Jam.object({
    name:Jam.string().min(3,'Too-Low').max(8,'Too Long').required('Empty Name is  not Allowed'),
    myemail:Jam.string().email().required('Empty Email is  not Allowed'),
    myage:Jam.number().min(18,'Not Allowed to work').max(60,'Retired Person, Not Allowed').required('Empty Age is  not Allowed'),
    mypass:Jam.string()
    .required('Empty Password is  not Allowed')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'),
    cpass:Jam.string()
    .required('Empty Confirm Password is  not Allowed')
    .oneOf([Jam.ref('mypass'),null],'Passsword Doesnt Match')
})
