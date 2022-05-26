import swell from 'swell-node'
import lodash from 'lodash'

import {Response} from "../models/response";
import {Cart} from "../models/cart";

async function list(req, res, next) {
  let query = {
    limit: 1,
    status: {
      $ne: 'converted'
    },
    'metadata.brand_id': req.query.brand_id,
    account_id: req.query.account_id,
    sort: 'date_updated desc'
  }

  let cart;
  await swell.get(`/carts`, query).then((cartResponse: Response<Cart>) => {
    cart = cartResponse;
  }).catch((err) => {
    next(err);
  });
  
  return cart;
}

async function post(req, res, next) {
  let data = {
    metadata: {
      brand_id: req.query.brand_id
    },
    account_id: req.query.account_id,
    account_logged_in: !!req.query.account_id
  }
  
  let cart;
  await swell.post(`/carts`, data).then((cartResponse: Cart) => {
    cart = cartResponse;
  }).catch((err) => {
    next(err);
  });
  
  return cart;
}

async function fetch(req, res, next) {
  if (!req.query.account_id || !req.query.brand_id) {
    res.status(400).json({ message: 'account_id and brand_id are mandatory fields' });
    return;
  }
  
  let carts: Response<Cart> = await list(req, res, next);
  if (!carts) return;
  
  if (carts.count == 0) {
    let cart: Cart = await post(req, res, next);
    res.status(200).json(cart);
  } else {
    let cart: Cart = lodash.head(carts.results);
    res.status(200).json(cart);
  }
}

module.exports = {
  fetch
};
