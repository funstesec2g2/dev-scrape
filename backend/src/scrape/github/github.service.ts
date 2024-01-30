// src/github.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private rateLimit = {
    limit: 0,
    remaining: 0,
  };

  private repos = [];

  private setRateLimit(info) {
    this.rateLimit = info;
  }

  private setRepos(data) {
    this.repos = data;
  }

  public async searchRepositories(searchQuery: string): Promise<any> {
    try {
      // Replace 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN' with your GitHub token
      const githubToken = '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';

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}`,
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      );

      // Update rate limit information
      const rateLimitInfo = {
        limit: response.headers['x-ratelimit-limit'],
        remaining: response.headers['x-ratelimit-remaining'],
      };
      this.setRateLimit(rateLimitInfo);

      this.setRepos(response.data.items);
      return this.repos;
    } catch (error) {
      console.error(error);
      if (error.response) {
        // Handle rate limit exceeded
        if (error.response.status === 403) {
          const rateLimitInfo = {
            limit: error.response.headers['x-ratelimit-limit'],
            remaining: 0,
          };
          this.setRateLimit(rateLimitInfo);
        }
      }
      throw error;
    }
  }
}
