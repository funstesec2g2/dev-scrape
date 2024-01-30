// src/github.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('repositories')
  async getRepositories(@Query('searchQuery') searchQuery: string): Promise<any> {
    try {
      if (!searchQuery) {
        return { success: false, error: 'Missing searchQuery parameter' };
      }

      const { repos, scrapedData } = await this.githubService.searchRepositories(searchQuery);

      return {
        success: true,
        data: {
          repositories: repos,
          scrapedData: scrapedData,
        },
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  
}

