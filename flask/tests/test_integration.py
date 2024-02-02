# tests/test_integration.py

import unittest
from flask import json
from app import flask_app

class FlaskIntegrationTestCase(unittest.TestCase):

    def setUp(self):
        self.app = flask_app.test_client()
        self.app.testing = True

    def test_search_youtube_and_wikipedia(self):
        # Perform a search on YouTube
        youtube_response = self.app.get('/youtube_search_title?video_title=test')
        youtube_data = json.loads(youtube_response.get_data(as_text=True))

        # Ensure the YouTube search was successful
        self.assertEqual(youtube_response.status_code, 200)
        self.assertIn('video_info', youtube_data)

        # Proceed only if YouTube search was successful
        if 'video_info' in youtube_data:
            video_title = youtube_data['video_info'][0]['title']

            # Perform a search on Wikipedia using the result from YouTube
            wikipedia_response = self.app.get(f'/wikipedia_search_title?page_title={video_title}')
            wikipedia_data = json.loads(wikipedia_response.get_data(as_text=True))

            # Assertions for Wikipedia search
            self.assertEqual(wikipedia_response.status_code, 200)
            self.assertIn('page_info', wikipedia_data)

    def test_search_tmdb_and_github(self):
        # Perform a search on TMDB
        tmdb_response = self.app.get('/tmdb_search_title?movie_title=Inception')
        tmdb_data = json.loads(tmdb_response.get_data(as_text=True))

        # Ensure the TMDB search was successful
        self.assertEqual(tmdb_response.status_code, 200)
        self.assertIn('movie_info', tmdb_data)

        # Proceed only if TMDB search was successful
        if 'movie_info' in tmdb_data:
            movie_title = tmdb_data['movie_info'][0]['title']

            # Perform a search on GitHub using the result from TMDB
            github_response = self.app.get(f'/github_search_topic?topic={movie_title}')
            github_data = json.loads(github_response.get_data(as_text=True))

            # Assertions for GitHub search
            self.assertEqual(github_response.status_code, 200)
            self.assertIn('repositories', github_data)

    def test_search_all_services(self):
        # Perform a search on all services
        response = self.app.get('/search_all?query=test')
        data = json.loads(response.get_data(as_text=True))

        # Assertions for the combined search
        self.assertEqual(response.status_code, 200)
        self.assertIn('youtube_results', data)
        self.assertIn('wikipedia_results', data)
        self.assertIn('tmdb_results', data)
        self.assertIn('github_results', data)

    # Add more integration tests as needed

if __name__ == '__main__':
    unittest.main()
