import {Server}  from 'hapi'
import serverPromise from  '../server'
import * as chai from 'chai'
import {IProduct} from '../models/Product';
//tsd is absente
const Lab:any = require('lab')
const lab = exports.lab = Lab.script();

var server:Server

function getList() {
  var options = {
    method: 'GET',
    url: '/products'
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Array);
    chai.expect(result).to.have.length(3);
  })
}

function getOne(productId) {
  var options = {
    method: 'GET',
    url: '/products/' + productId
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Object);
    chai.expect(result).to.have.property('id', productId);
  })
}

function getNotExisted(productId) {
  var options = {
    method: 'GET',
    url: '/products/' + productId
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(400);
  })
}

function create(newProduct) {
  var options = {
    method: 'POST',
    url: '/products',
    payload: newProduct
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Object);
    chai.expect(result).to.have.property('id');
    chai.expect(result).to.have.property('name', newProduct.name);
    chai.expect(result).to.have.property('price', newProduct.price);
  })
}

function update(productId, newProduct) {
  var options = {
    method: 'PUT',
    url: '/products/2',
    payload: newProduct
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Object);
    chai.expect(result).to.have.property('id', productId);
    chai.expect(result).to.have.property('name', newProduct.name);
    chai.expect(result).to.have.property('price', newProduct.price);
  })
}

function remove(productId) {

  var options = {
    method: 'DELETE',
    url: '/products/' + productId,
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
  }).then(()=> {
    getNotExisted(productId)
  })
}

lab.experiment('Test', ()=> {
  lab.before(()=> {
    return serverPromise.then((serverInst:Server)=> {
      server = serverInst
    })
  })

  lab.test('products controller: get list', getList)

  lab.test('products controller: get one', getOne.bind(this, 2))

  lab.test('products controller: create', create.bind(this, {
    name: 'New product',
    price: 1333
  }))

  lab.test('products controller: update', update.bind(this, 2, {
    name: 'Product 2 new name',
    id: 2,
    price: 11
  }))

  lab.test('products controller: delete', remove.bind(this, 2))
})



