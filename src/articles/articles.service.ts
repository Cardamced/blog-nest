import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.articlesRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.articlesRepository.save(article);
  }

  async updateArticle(
    id: number,
    updatedFields: Partial<Article>,
  ): Promise<Article[]> {
    await this.articlesRepository.update(id, updatedFields);
    //   le code ci-dessous permet de visulaiser dans la console les champs modifiés.
    //   C'est optionnel, l'await suffit, accompagné du return en bas.
    //   on pourrait aussi gérer cette méthode sans asynchronisme.

    const updatedArticle = this.articlesRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
    return updatedArticle;
    // return;
  }

  deleteArticle(article: Article): void {
    this.articlesRepository.delete(article);
  }
}
