import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {EcommdbDataSource} from '../datasources';
import {Order, OrderRelations, Cart} from '../models';
import {CartRepository} from './cart.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly cart: BelongsToAccessor<Cart, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.ecommdb') dataSource: EcommdbDataSource, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>,
  ) {
    super(Order, dataSource);
    this.cart = this.createBelongsToAccessorFor('cart', cartRepositoryGetter,);
    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
  }
}
