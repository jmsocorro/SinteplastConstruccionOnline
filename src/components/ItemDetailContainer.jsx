import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import productos from "../assets/productos.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const { productoId } = useParams();
    const [productosCargados, cambiarProductos] = useState ([]);
    useEffect (() => {
      //console.log('App mounted');
      cargarDatosProductos ();
      return () => {
        //console.log('Will unmount');
      }
    },[productosCargados, productoId]);
    //console.log('Will render');
    let cargarDatos = new Promise((resolve, reject) => {
      if(productos.length>0){
        setTimeout(() => {
          resolve(productos);
        }, 500);
        } else {
          reject ( new Error("No hay productos"));
        }      
    });
    let productosFiltrados = [];
  
    if (typeof productoId !== 'undefined') {
      productosFiltrados = productosCargados.filter( (producto) => {
        return producto.nombre === productoId;
      });
    }
  
    async function cargarDatosProductos () {
      try {
        cambiarProductos(await cargarDatos);
      }
      catch (error) {
        console.log (error);
      }
    }
  
    return (
      <ItemDetail producto = {productosFiltrados} />
    )
  }

export default ItemDetailContainer

