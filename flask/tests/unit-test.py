# tests/test_app.py

import unittest
from flask import json
from app import flask_app

class FlaskAppTestCase(unittest.TestCase):

    def setUp(self):
        self.app = flask_app.test_client()
        self.app.testing = True

    def test_search_route(self):
        response = self.app.get('/search?keyword=test')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertIn('results', data)

    def test_youtube_search_by_title_route(self):
        response = self.app.get('/youtube_search_title?video_title=test')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertIn('video_info', data)

    def test_wikipedia_search_by_title_route(self):
        response = self.app.get('/wikipedia_search_title?page_title=Python_(programming_language)')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertIn('page_info', data)

    def test_tmdb_search_by_title_route(self):
        response = self.app.get('/tmdb_search_title?movie_title=Inception')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertIn('movie_info', data)

    def test_github_search_by_topic_route(self):
        response = self.app.get('/github_search_topic?topic=python')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertIn('repositories', data)

if __name__ == '__main__':
    unittest.main()
