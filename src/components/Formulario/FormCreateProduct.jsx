import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBS from 'react-bootstrap/Form';
import './Formulario.css';
import axiosInstance from '../../Services/axiosConfig';



function FormCreateProduct() {
  const initialValues = {
    name: '',
    description: '',
    image: '',
    stock: '',
    price: '',
    talla: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Nombre demasiado corto')
      .max(20, 'Nombre demasiado largo')
      .required('el campo es obligatorio'),
    description: Yup.string()
      .min(10, 'Descripcion demasiado corto')
      .max(150, 'Descripcion demasiado largo')
      .required('El campo es obligatorio'),
    image: Yup.string().required('El campo es obligatorio'),
    stock: Yup.number().required('El campo es obligatorio'),
    price: Yup.number().required('El campo es obligatorio'),
    talla: Yup.string().required('El campo es obligatorio'),
  })

  return (
    <div className='container fluid'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { isSubmitting }) => {
          console.log(values);
          axiosInstance.post('/', values)
            .then(r => {
              if (r.status == 201) {
                console.log(r)
                isSubmitting(false)
              } else {
                throw new Error(`[${r.status}]Error al solicitud`)
              }
            })
            .catch(err => console.log(err))
        }}
      >
        {
          ({ values, isSubmitting, errors, touched }) => (
            <Form>

              <FormBS.Group className='mb-3'>
                <label htmlFor="name"> Nombre del producto </label>
                <Field
                  id='name'
                  type='text'
                  placeholder='Pantalon'
                  name='name'
                  className='form-control field-input' />
                {
                  errors.name && touched.name && (
                    <ErrorMessage name='name' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <FormBS.Group className='mb-3'>
                <label htmlFor="description"> Descripcion del producto </label>
                <Field
                  id='description'
                  type='text'
                  placeholder='Decripcion'
                  name='description'
                  className='form-control field-input' />
                {
                  errors.description && touched.description && (
                    <ErrorMessage name='description' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <FormBS.Group className='mb-3'>
                <label htmlFor="image"> Imagen del producto </label>
                <Field
                  id='image'
                  type='text'
                  placeholder='Imagen'
                  name='image'
                  className='form-control field-input' />
                {
                  errors.image && touched.image && (
                    <ErrorMessage name='image' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <FormBS.Group className='mb-3'>
                <label htmlFor="stock"> Stock del producto </label>
                <Field
                  id='stock'
                  type='number'
                  placeholder='5'
                  name='stock'
                  className='form-control field-input' />
                {
                  errors.stock && touched.stock && (
                    <ErrorMessage name='stock' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <FormBS.Group className='mb-3'>
                <label htmlFor="price"> Precio del producto </label>
                <Field
                  id='price'
                  type='number'
                  placeholder='0.00 €'
                  name='price'
                  className='form-control field-input' />
                {
                  errors.price && touched.price && (
                    <ErrorMessage name='price' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <FormBS.Group className='mb-3'>
                <label htmlFor="talla"> Talla del producto </label>
                <Field
                  id='talla'
                  type='text'
                  placeholder='L, M, S, XL, XXL'
                  name='talla'
                  className='form-control field-input' />
                {
                  errors.talla && touched.talla && (
                    <ErrorMessage name='talla' component='div' ></ErrorMessage>
                  )
                }
              </FormBS.Group>

              <Button type='submit' className='btn btn-success'>Cargar Producto</Button>
              {
                isSubmitting ? (<p>Enviando Producto/s...</p>) : null
              }

            </Form>
          )
        }

      </Formik>
    </div>
  )
};

export default FormCreateProduct;