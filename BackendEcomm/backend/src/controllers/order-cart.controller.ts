import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Order,
  Cart,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderCartController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/cart', {
    responses: {
      '200': {
        description: 'Cart belonging to Order',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cart),
          },
        },
      },
    },
  })
  async getCart(
    @param.path.number('id') id: typeof Order.prototype.id,
  ): Promise<Cart> {
    return this.orderRepository.cart(id);
  }
}
