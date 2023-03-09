import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import productos from "../assets/productos.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { familiaId } = useParams();
  const [productosCargados, cambiarProductos] = useState ([]);
  useEffect (() => {
    //console.log('App mounted');
    cargarDatosProductos ();
    return () => {
      //console.log('Will unmount');
    }
  },[productosCargados, familiaId]);
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
  let productosFiltrados = productosCargados;

  if (typeof familiaId !== 'undefined') {
    productosFiltrados = productosCargados.filter( (producto) => {
      console.log(producto.familia,familiaId);
      return producto.familia === familiaId;
    });
    console.log(productosFiltrados);
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
    <ItemList productosFiltrados = {productosFiltrados} />
  )
}

export default ItemListContainer