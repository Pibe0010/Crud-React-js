import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import FormBS from "react-bootstrap/Form";
import ModalBS from "react-bootstrap/Modal";
import { ItemsContext, UPLOAD_ITEMS } from "../context/itemsContext";
import axiosInstance from "../Services/axiosConfig";

const Modal = (props) => {

    const {items, dispatch} = useContext(ItemsContext);


    const initialValues = {
        name: props.item.name ||"",
        description: props.item.description || "",
        image: props.item.image || "",
        stock: props.item.stock || "",
        price: props.item.price || "",
        talla: props.item.talla || "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, "Nombre demasiado corto")
            .max(20, "Nombre demasiado largo")
            .required("el campo es obligatorio"),
        description: Yup.string()
            .min(10, "Descripcion demasiado corto")
            .max(150, "Descripcion demasiado largo")
            .required("El campo es obligatorio"),
        image: Yup.string().required("El campo es obligatorio"),
        stock: Yup.number().required("El campo es obligatorio"),
        price: Yup.number().required("El campo es obligatorio"),
        talla: Yup.string().required("El campo es obligatorio"),
    });

    return (
        <ModalBS
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <ModalBS.Header closeButton className="bg-dark" style={{ color: "#fff" }}>
                <ModalBS.Title id="contained-modal-title-vcenter">
                    Editar Producto
                </ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body className="bg-light">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={ async (values, { setSubmitting }) => {
                        console.log(values);
                        //await props.onSubmit(props.item.id, values);
                        axiosInstance.put(`/${props.item.id}`, values)
                        .then(r => {
                            if (r.status === 200) {
                                const itemsUpload = items.map(item =>{
                                    if (item.id === r.data.id) {
                                        return r.data;
                                    }
                                    return item;
                                })
                                dispatch({type: UPLOAD_ITEMS, payload: itemsUpload});
                                setSubmitting(false);
                            } else {
                                throw new Error(`[Error ${r.status}] Error en la solicitud `)
                            }
                        })
                        .catch(err => console.log(err));
                        props.onHide();
                    }}>
                    {({ values, isSubmitting, errors, touched, handleChange }) => (
                        <Form>
                            <FormBS.Group className="mb-3">
                                <label htmlFor="name"> Nombre del producto </label>
                                <Field
                                    id="name"
                                    type="text"
                                    placeholder="Pantalon"
                                    name="name"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && (
                                    <ErrorMessage name="name" component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <FormBS.Group className="mb-3">
                                <label htmlFor="description"> Descripcion del producto </label>
                                <Field
                                    id="description"
                                    type="text"
                                    placeholder="Decripcion"
                                    name="description"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.description && touched.description && (
                                    <ErrorMessage
                                        name="description"
                                        component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <FormBS.Group className="mb-3">
                                <label htmlFor="image"> Imagen del producto </label>
                                <Field
                                    id="image"
                                    type="text"
                                    placeholder="Imagen"
                                    name="image"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.image && touched.image && (
                                    <ErrorMessage name="image" component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <FormBS.Group className="mb-3">
                                <label htmlFor="stock"> Stock del producto </label>
                                <Field
                                    id="stock"
                                    type="number"
                                    placeholder="5"
                                    name="stock"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.stock && touched.stock && (
                                    <ErrorMessage name="stock" component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <FormBS.Group className="mb-3">
                                <label htmlFor="price"> Precio del producto </label>
                                <Field
                                    id="price"
                                    type="number"
                                    placeholder="0.00 €"
                                    name="price"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.price && touched.price && (
                                    <ErrorMessage name="price" component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <FormBS.Group className="mb-3">
                                <label htmlFor="talla"> Talla del producto </label>
                                <Field
                                    id="talla"
                                    type="text"
                                    placeholder="L, M, S, XL, XXL"
                                    name="talla"
                                    className="form-control field-input"
                                    onChange={handleChange}
                                />
                                {errors.talla && touched.talla && (
                                    <ErrorMessage name="talla" component="div"></ErrorMessage>
                                )}
                            </FormBS.Group>

                            <Button type="submit" className="btn btn-info">
                                Editar Producto
                            </Button>
                            {isSubmitting ? <p>Enviando Producto/s...</p> : null}
                        </Form>
                    )}
                </Formik>
            </ModalBS.Body>
            <ModalBS.Footer className="bg-dark">
                <Button onClick={props.onHide}>Close</Button>
            </ModalBS.Footer>
        </ModalBS>
    );
};

export default Modal;
