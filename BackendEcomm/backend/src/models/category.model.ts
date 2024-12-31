import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';


@model()
export class Category extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  parentId?: string;

  @hasMany(() => Product)
  products: Product[];

  @hasMany(() => Category, {keyTo: 'parentId'})
  categories: Category[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
