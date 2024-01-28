// src/github.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('scrape/:username')
  async scrapeGithub(@Param('username') username: string) {
    const repositories = await this.githubService.scrapeRepositories(username);
    return { repositories };
  }
}
