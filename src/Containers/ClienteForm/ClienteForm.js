import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './ClienteForm.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const ClienteForm = (props) => {

    const [succedMessageOpen, setSuccedMessageOpen] = useState(false);

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));

    const internStyle = useStyles();

    const Message = () => {
        setSuccedMessageOpen(!succedMessageOpen);
    }


    const AlertMessage = () => {
        return (
            <Backdrop className={internStyle.backdrop} open={succedMessageOpen} onClick={Message}>
                <MuiAlert className={classes.upAnimation} severity="success">Formulario completado con éxito.</MuiAlert >
            </Backdrop>
        )
    }

    const validate = values => {
        const errors = {};

        if (!values.nombre) {
            errors.nombre = 'Campo Requerido.';
        } else if (values.nombre.length < 3) {
            errors.nombre = 'El nombre debe de tener una longitud mínima (3 caracteres).';
        } else if (values.nombre.length > 15) {
            errors.nombre = 'El nombre excede la longitud máxima (15 caracteres).';
        }

        if (!values.apellido) {
            errors.apellido = 'Campo Requerido.';
        } else if (values.apellido.length < 3) {
            errors.apellido = 'El nombre debe de tener una longitud mínima (3 caracteres).';
        } else if (values.apellido.length > 15) {
            errors.apellido = 'El nombre excede la longitud máxima (15 caracteres).';
        }

        if (!values.correo) {
            errors.correo = 'Campo Requerido.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
            errors.correo = 'Invalid email address';
        }

        if (!values.direccion) {
            errors.direccion = 'Campo Requerido.';
        } else if (values.direccion.length > 100) {
            errors.direccion = 'El nombre excede la longitud máxima (100 caracteres).';
        }

        if (!values.empresa) {
            errors.empresa = 'Campo Requerido.';
        }

        if (!values.telefono) {
            errors.telefono = 'Campo Requerido.';
        } else if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.telefono)) {
            errors.telefono = 'Formato de telefono invalido.';
        }
        console.log(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.telefono))
        if (!values.RncOCedula) {
            errors.RncOCedula = 'Campo Requerido.';
        } else if (values.RncOCedula.length !== 9 && values.RncOCedula.length !== 11 && values.RncOCedula.length !== 13) {
            errors.RncOCedula = 'RNC/Cédula no valido.'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            correo: '',
            direccion: '',
            empresa: '',
            telefono: '',
            RncOCedula: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
                setSubmitting(false);
                Message();
                setTimeout(() => {
                    props.history.push('/confirmacion');
                }, 2000);
            }, 3000);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.container}>
            <header className={classes.header}>
                <h2>Formulario de captura de clientes</h2>
            </header>
            <div className={classes.content}>
                <TextField
                    id="standar-basics"
                    label="Nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    error={formik.errors.nombre}
                    helperText={formik.errors.nombre} />
                <TextField
                    id="standar-basics"
                    label="Apellido"
                    name="apellido"
                    onChange={formik.handleChange}
                    error={formik.errors.apellido}
                    helperText={formik.errors.apellido} />
                <TextField
                    id="standar-basics"
                    label="Correo"
                    name="correo"
                    onChange={formik.handleChange}
                    error={formik.errors.correo}
                    helperText={formik.errors.correo} />
                <TextField
                    id="standar-basics"
                    label="Dirección"
                    name="direccion"
                    onChange={formik.handleChange}
                    error={formik.errors.direccion}
                    helperText={formik.errors.direccion} />
                <TextField
                    id="standar-basics"
                    label="Télefono"
                    name="telefono"
                    onChange={formik.handleChange}
                    error={formik.errors.telefono}
                    helperText={formik.errors.telefono} />
                <TextField
                    id="standar-basics"
                    label="Empresa"
                    name="empresa"
                    onChange={formik.handleChange}
                    error={formik.errors.empresa}
                    helperText={formik.errors.empresa} />
                <TextField
                    id="standar-basics"
                    label="RNC/Cédula"
                    name="RncOCedula"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.RncOCedula}
                    helperText={formik.errors.RncOCedula} />
            </div>
            <footer className={classes.footer}>
                <Button variant="contained" color="primary" type="submit" disabled={formik.isSubmitting}>
                    {!formik.isSubmitting ? 'Enviar' : <CircularProgress color="secondary" style={{ width: '25px', height: '25px' }} />}
                </Button>
            </footer>
            {succedMessageOpen ? AlertMessage() : null}
        </form>
    )
}

export default ClienteForm;