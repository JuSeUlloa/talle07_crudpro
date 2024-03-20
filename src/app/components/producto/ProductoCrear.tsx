import { useState } from "react";
import { useNavigate } from "react-router-dom";

import noFoto from '../../../assets/images/noDisponible.png';
import { Categoria } from "../../models/Categoria";
import { ARREGLO_CATEGORIAS } from "../../mocks/categoria-mock";
import { Producto } from "../../models/Producto";
import { ARREGLO_PRODUCTOS } from "../../mocks/producto-mock";
import { useForm } from "../../utilities/misHooks/useForm";
import { Form } from "react-bootstrap";
import { ConvertirBase64 } from "../../utilities/funciones/ConvertirBase64";

export const ProductoCrear = () => {

    type formHtml = React.FormEvent<HTMLFormElement>;
    const navigate = useNavigate();

    const [enProceso, setEnProceso] = useState(false);
    const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
    const [imgBase64, setImgBase64] = useState<string>("");

    const [arregloCategoria] = useState<Categoria[]>(ARREGLO_CATEGORIAS);
    const [arregloProductos] = useState<Producto[]>(ARREGLO_PRODUCTOS);


    let {
        nombreProducto,
        valorProducto,
        fechaVencimientoProducto,
        codCategoria,
        fotoProducto,
        dobleEnlace,
        objeto,
    } = useForm<Producto>(new Producto(0, "", new Categoria(0, ""), 0, new Date(), "", ""));


    const enviarFormulario = (fh: formHtml) => {
        fh.preventDefault();
        const formulario = fh.currentTarget;
        if (formulario.checkValidity() === false) {
            fh.preventDefault();
            fh.stopPropagation();
            setEnProceso(true);
        } else {
            const nuevoCodigo = arregloProductos.length + 1;
            objeto.codProducto = nuevoCodigo;
            objeto.base64Producto = imgBase64;
            arregloProductos.push(objeto);

            setEnProceso(false);
            navigate("/list");
        }
    };

    const cargarImagen = async (e: any) => {
        const archivos = e.target.files;
        const imagen = archivos[0];
        setImagenMiniatura(URL.createObjectURL(imagen));
        dobleEnlace(e);
        const base64 = await ConvertirBase64(imagen);
        setImgBase64(String(base64));
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-5 mt-5 ">
                <Form noValidate validated={enProceso} onSubmit={enviarFormulario}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className=" rojito">Formulario creación</h5>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <Form.Group controlId="nombreProducto">
                                    <Form.Label>
                                        <span className="rojito">*</span> Producto
                                    </Form.Label>
                                    <Form.Control
                                        size="sm"
                                        required
                                        type="text"
                                        name="nombreProducto"
                                        value={nombreProducto}
                                        onChange={dobleEnlace}
                                    />
                                </Form.Group>
                            </div>



                            <div className="mb-3">
                                <Form.Group controlId="gen">
                                    <Form.Label>
                                        <span className="rojito">*</span> Fecha Vencimiento
                                    </Form.Label>

                                    <Form.Select
                                        size="sm"
                                        required
                                        name="codCategoria"
                                        value={codCategoria}
                                        onChange={dobleEnlace}
                                    >
                                        <option value="">Seleccione un genero</option>
                                        {arregloCategoria.map((objCategoria: Categoria, indice) => (
                                            <option key={indice} value={objCategoria.codCategoria}>
                                                {objCategoria.nombreCategoria}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <Form.Group controlId="pro">
                                    <Form.Label>
                                        <span className="rojito">*</span> Precio
                                    </Form.Label>
                                    <Form.Control
                                        size="sm"
                                        required
                                        type="text"
                                        name="valorProducto"
                                        value={valorProducto}
                                        onChange={dobleEnlace}
                                    />
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <Form.Group controlId="fot">
                                    <Form.Label>
                                        <span className="rojito">*</span> Imágen
                                    </Form.Label>
                                    <Form.Control
                                        size="sm"
                                        required
                                        type="file"
                                        name="fotoProducto"
                                        value={fotoProducto}
                                        onChange={cargarImagen}
                                    />
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={imagenMiniatura}
                                        alt="no foto"
                                        style={{ height: "175px" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Crear película
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}