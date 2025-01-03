import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
   Category,
} from '../models';
import {CategoryRepository} from '../repositories';

export class CategoryCategoryController {
  constructor(
    @repository(CategoryRepository) protected categoryRepository: CategoryRepository,
  ) { }

  @get('/categories/{id}/categories', {
    responses: {
      '200': {
        description: 'Array of Category has many Category',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Category>,
  ): Promise<Category[]> {
    return this.categoryRepository.categories(id).find(filter);
  }

  @post('/categories/{id}/categories', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: {'application/json': {schema: getModelSchemaRef(Category)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Category.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {
            title: 'NewCategoryInCategory',
            exclude: ['id'],
            optional: ['parentId']
          }),
        },
      },
    }) category: Omit<Category, 'id'>,
  ): Promise<Category> {
    return this.categoryRepository.categories(id).create(category);
  }

  @patch('/categories/{id}/categories', {
    responses: {
      '200': {
        description: 'Category.Category PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {partial: true}),
        },
      },
    })
    category: Partial<Category>,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.categoryRepository.categories(id).patch(category, where);
  }

  @del('/categories/{id}/categories', {
    responses: {
      '200': {
        description: 'Category.Category DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.categoryRepository.categories(id).delete(where);
  }
}
