'use client'
import Image from 'next/image'
import styles from './page.module.css'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import InputField from '@/components/inputField'

const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - birthday
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const SignUpSchema = Yup.object().shape({
  login: Yup.string()
    .min(6, 'Login is too short')
    .max(16, 'Login must be shorter the 16')
    .matches(/^[0-9a-zA-Z_/\-/.]+$/, 'Forbidden symbols')
    .required(),
  email: Yup.string().email('Plase enter right email').required('Required'),
  birthday: Yup.date()
    .test('birthday', 'Please choose a valid date of birth', (value) => {
      return calculateAge(new Date(value)) > 18
    })
    .required('Birthday is required'),
})

export default function Home() {
  const handleSubmit = (values) => {
    console.log(values.login)
  }

  return (
    <section className="sign-up">
      <Formik
        initialValues={{
          login: '',
          email: '',
          birthday: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className="sign-up__form">
            <InputField
              error={errors.login}
              values={values.login}
              handleChange={handleChange}
              touched={touched.login}
              placeholder="login"
              type="text"
              name="email"
            />
            <InputField
              error={errors.email}
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              placeholder="email"
              type="text"
              name="email"
            />
            <InputField
              error={errors.birthday}
              values={values.birthday}
              handleChange={handleChange}
              touched={tadatebirthday}
              placeholder="date"
              type="date"
              name="birthday"
            />
            <button type="submit">Sign-Up</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
