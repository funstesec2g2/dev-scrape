// src/github.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class GithubService {
  async scrapeRepositories(username: string) {
    try {
      const url = `https://github.com/${username}?tab=repositories`;

      // Fetch HTML content from GitHub profile page
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      // Extract repository data using Cheerio
      const repositories = [];

      $('.repo-list li').each((index, element) => {
        const repoName = $(element).find('h3 a').text().trim();
        const repoURL = $(element).find('h3 a').attr('href');

        repositories.push({
          name: repoName,
          url: `https://github.com${repoURL}`,
        });
      });

      return repositories;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
