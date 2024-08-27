import pytest
import requests

# Update the URL below according to your Flask app's address
BASE_URL = "http://127.0.0.1:5000"

@pytest.fixture
def app_url():
    return BASE_URL

def test_playstore_search(app_url):
    response = requests.get(f"{app_url}/search?keyword=example")
    assert response.status_code == 200
    data = response.json()
    assert 'results' in data or 'error' in data

def test_youtube_search_by_title(app_url):
    response = requests.get(f"{app_url}/youtube_search_title?video_title=example")
    assert response.status_code == 200
    data = response.json()
    assert 'video_info' in data or 'error' in data

def test_wikipedia_search_by_title(app_url):
    response = requests.get(f"{app_url}/wikipedia_search_title?page_title=Python")
    assert response.status_code == 200
    data = response.json()
    assert 'page_info' in data or 'error' in data

def test_tmdb_search_by_title(app_url):
    response = requests.get(f"{app_url}/tmdb_search_title?movie_title=Inception")
    assert response.status_code == 200
    data = response.json()
    assert 'movie_info' in data or 'error' in data

def test_github_search_by_topic(app_url):
    response = requests.get(f"{app_url}/github_search_topic?topic=python")
    assert response.status_code == 200
    data = response.json()
    assert 'repositories' in data or 'error' in data

if __name__ == '__main__':
    pytest.main()
