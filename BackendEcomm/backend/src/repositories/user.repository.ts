import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {EcommdbDataSource} from '../datasources';
import {User, UserRelations, Cart} from '../models';
import {CartRepository} from './cart.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly cart: HasOneRepositoryFactory<Cart, typeof User.prototype.id>;

  constructor(
    @inject('datasources.ecommdb') dataSource: EcommdbDataSource, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>,
  ) {
    super(User, dataSource);
    this.cart = this.createHasOneRepositoryFactoryFor('cart', cartRepositoryGetter);
    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
  }
}
