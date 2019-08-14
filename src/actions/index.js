// import axios from 'axios';
// import { URL_FETCH } from '../constants';
// import STORE from '../stores';
// import Axios from 'axios';

// export const getListProducts = () => {
//     STORE.dispatch({
//         type:'GET_LIST_PRODUCTS_REQUESTING',
//         payload:null
//     })
//     Axios.get(`${URL_FETCH}/products`)
//         .then( resp => {
//             let respt = resp.data;
//             console.log({ resp });
//             STORE.dispatch({
//                 type: 'GET_ALL_PRODUCTS',
//                 payload: respt
//             })
            
//         } )
//         .catch( err =>  console.log({err: err.message }) )
// }
// export const addProduct= (title, description, price, image) => {
//     const URL = `${URL_FETCH}/products`;
//     const formData = new FormData();
//     //dinh kem hinh anh trong image
//     formData.append('image',image);
//     //dinh kem du lieu
//     const data = JSON.stringify({ title, description, price, image });
//     formData.append('data',data);
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
//     Axios.post(URL, formData, config)
//         .then( resp => {
//             let respt = resp.data;
//             return STORE.dispatch({
//                 type: 'ADD_PRODUCT',
//                 payload: respt.data
//             });
//         })
//         .catch(err => console.log({ err }))
// }

// export const removeProduct = productID => {
//     STORE.dispatch({
//         type: 'REQUESTING_REMOVE',
//         payload: null
//     })
//     const URL = `${URL_FETCH}/product/${productID}`;
//     Axios.delete(URL)
//         .then(resp => {
//             const respt = resp.data;
//             // console.log({ respt });
//             const { data : { _id: productID }} = respt;
//             STORE.dispatch({
//                 type: 'REMOVE_PRODUCT',
//                 payload: {
//                     productID
//                 }
//             });
//             STORE.dispatch({
//                 type: 'REMOVE_DONE',
//                 payload: null
//             })
//         })
//         .catch(err => {
//             STORE.dispatch({
//                 type: 'REMOVE_DONE',
//                 payload: null
//             });
//             console.log({ err: err.message })
//         }
//         )
// }

// export const getInfoProdcut = productID => {
//     const URL = `${URL_FETCH}/product/${productID}`;
//     Axios.get(URL)
//         .then(resp=> {
//             const respt = resp.data;
//             // console.log({ respt });
//             const { data : product } = respt;
//             STORE.dispatch({
//                 type: 'GET_INFO_PRODUCT',
//                 payload: {
//                     product
//                 }
//             })
//         })
//         .catch(err => {
//             console.log({err: err.message});
//         })
// }
// export const updateInfoProduct =  (productID, title, description, price,) => {
//     STORE.dispatch({
//         type: 'REQUESTING_GET_INFO_PRODUCT',
//         payload: null
//     })
//     const URL = `${URL_FETCH}/product/${productID}`;
//     Axios.put(URL, {title, description, price})
//         .then(resp=> {
//             const respt = resp.data;
//             // console.log({ respt });
//             const { data : productNew } = respt;
//             console.log({ productNew });
//             STORE.dispatch({
//                 type: 'GET_INFO_PRODUCTx',
//                 payload: {
//                     product
//                 }
//             });
//             STORE.dispatch({
//                 type: 'REQUESTING_GET_INFO_PRODUCT',
//                 payload: null
//             });
            
//         })
//         .catch(err => {
//             console.log({err: err.message});
//         })
// }