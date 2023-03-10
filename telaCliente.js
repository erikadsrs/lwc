import { LightningElement, wire } from 'lwc';
import getAccountMercadoList from '@salesforce/apex/ClienteController.getAccountMercadoList';
import getAccountPadariaList from '@salesforce/apex/ClienteController.getAccountPadariaList';

export default class TelaCliente extends LightningElement {

    
    @wire(getAccountMercadoList) accountsMercado;
    @wire(getAccountPadariaList) accountsPadaria;

}

//PROCESSO COMPLETO

// @wire(allCliente) accounts;

// accounts;

// @wire(allCliente)
//     getAllCliente({data,error}){
//         if(data){
//             this.accounts = data;
//             console.log('this.accounts');
//             console.log(this.accounts);
//         } else if  (error) {
//             console.log(error);
//         } 
//     } 
