import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cart} from './cart.model';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
  })
  paymentMethod?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @belongsTo(() => Cart)
  cartId: number;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
