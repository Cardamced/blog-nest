import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  getAll() {
    return this.service.getArticles();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedFields: Partial<Article>) {
    return this.service.updateArticle(Number(id), <Article>updatedFields);
  }

  @Delete(':id')
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
