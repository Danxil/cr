import {Server}  from 'hapi'
import serverPromise from  '../server'
import * as chai from 'chai'
import {IProduct} from '../models/Product';
//tsd is absente
const Lab:any = require('lab')
const lab = exports.lab = Lab.script();

var server:Server

function getListProduct() {
  var options = {
    method: 'GET',
    url: '/api/products'
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Array);
    chai.expect(result).to.have.length(3);
  })
}

function getOneProduct(productId) {
  var options = {
    method: 'GET',
    url: '/api/products/' + productId
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
    url: '/api/products/' + productId
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(400);
  })
}

function createProduct(newProduct) {
  var options = {
    method: 'POST',
    url: '/api/products',
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

function updateProduct(productId, newProduct) {
  var options = {
    method: 'PUT',
    url: '/api/products/2',
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

function deleteProduct(productId) {

  var options = {
    method: 'DELETE',
    url: '/api/products/' + productId,
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
  }).then(()=> {
    getNotExisted(productId)
  })
}

function getUserProducts(userId) {
  var options = {
    method: 'GET',
    url: '/api/user/' + userId + '/products'
  }

  return server.inject(options).then((response)=> {
    var result = response.result

    chai.expect(response.statusCode).to.eq(200);
    chai.expect(result).to.be.instanceof(Array);
    chai.expect(result).to.have.length(1);
  })
}

lab.experiment('Test', ()=> {
  lab.before(()=> {
    return serverPromise.then((serverInst:Server)=> {
      server = serverInst
    })
  })

  lab.experiment('products controller', ()=> {
    lab.test('get. list', getListProduct)

    lab.test('get one', getOneProduct.bind(this, 2))

    lab.test('create', createProduct.bind(this, {
      name: 'New product',
      price: 1333
    }))

    lab.test('update', updateProduct.bind(this, 2, {
      name: 'Product 2 new name',
      id: 2,
      price: 11
    }))

    lab.test('delete', deleteProduct.bind(this, 2))
  })

  lab.experiment('user controller', ()=> {
    lab.test('get user products', getUserProducts.bind(this, 1))
  })
})



