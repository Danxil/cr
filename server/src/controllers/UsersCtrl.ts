import * as Hapi from 'hapi';
import * as React from 'react';
import BaseCtrl from './BaseCtrl';
import {UsersRepo} from '../repos/UsersRepo';
import {IUser} from '../models/User';
import {IProduct} from '../models/Product';

export default class UsersCtrl extends BaseCtrl {
  usersRepo:UsersRepo;

  constructor(protected server:Hapi.Server) {
    super(server);

    this.usersRepo = new UsersRepo(this.db);
  }

  getUserProducts(req:Hapi.Request, reply:Hapi.IReply) {
    this.usersRepo.getUserProducts(req.params['userId']).then((response:IProduct[])=> {
      reply.response(response)
    })
  }

  addUserProduct(req:Hapi.Request, reply:Hapi.IReply) {
    this.usersRepo.addUserProduct(req.params['userId'], req.params['productId'])
      .then(()=> this.usersRepo.getUserProducts(req.params['userId']))
      .then((result:IProduct[])=> {
        reply.response(result)
      })
  }

  removeUserProduct(req:Hapi.Request, reply:Hapi.IReply) {
    this.usersRepo.removeUserProduct(req.params['userId'], req.params['productId'])
      .then(()=> this.usersRepo.getUserProducts(req.params['userId']))
      .then((result:IProduct[])=> {
        reply.response(result)
      })
  }
}