import * as Hapi from 'hapi';
import * as React from 'react';
import BaseCtrl from './BaseCtrl';
import {ProductsRepo} from '../repos/ProductsRepo';
import {IProduct} from '../models/Product';

export default class ProductsCtrl extends BaseCtrl {
  productsRepo:ProductsRepo;

  constructor(protected server:Hapi.Server) {
    super(server);

    this.productsRepo = new ProductsRepo(this.db);
  }

  list(req:Hapi.Request, reply:Hapi.IReply) {
    this.productsRepo.list().then((response:IProduct[])=> {
      reply.response(response)
    })
  }


  get(req:Hapi.Request, reply:Hapi.IReply) {
    this.productsRepo.get(req.params['productId']).then((response:IProduct)=> {
      reply.response(response)
    })
  }

  create(req:Hapi.Request, reply:Hapi.IReply) {
    this.productsRepo.create(<IProduct>req.payload).then((response:IProduct)=> {
      reply.response(response)
    })
  }

  update(req:Hapi.Request, reply:Hapi.IReply) {
    this.productsRepo.update(req.params['productId'], <IProduct>req.payload).then((response:IProduct)=> {
      reply.response(response)
    })
  }
  
  delete(req:Hapi.Request, reply:Hapi.IReply) {
    this.productsRepo.delete(req.params['productId']).then((response)=> {
      reply.response(response)
    })
  }
}