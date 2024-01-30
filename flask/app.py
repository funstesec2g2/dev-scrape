from flask import Flask, request, jsonify
from google_play_scraper import app as scraper_app, search as playstore_search
from flask_cors import CORS
from yt_dlp import YoutubeDL
import wikipediaapi
import requests

flask_app = Flask(__name__)
CORS(flask_app)  # Enable CORS for all routes

# playstore route
@flask_app.route('/search', methods=['GET'])
def search_route():
    keyword = request.args.get('keyword')
    results = playstore_search(keyword, lang='en', country='us')

    if results:
        first_app = results[0]
        app_details = scraper_app(first_app['appId'], lang='en', country='us')
        return jsonify({'results': app_details})
    else:
        return jsonify({'error': 'No results found.'})

# youtube search by title route
@flask_app.route('/youtube_search_title', methods=['GET'])
def youtube_search_by_title():
    video_title = request.args.get('video_title')

    try:
        # Search for videos by title using yt_dlp
        with YoutubeDL() as ydl:
            result = ydl.extract_info(f"ytsearch1:{video_title}", download=False)
            if 'entries' in result and result['entries']:
                first_video = result['entries'][0]
                video_info = {
                    'title': first_video['title'],
                    'author': first_video['uploader'],
                    'video_id': first_video['id'],
                }
                return jsonify({'video_info': video_info})
            else:
                return jsonify({'error': 'No videos found for the given title.'})

    except Exception as e:
        return jsonify({'error': str(e)})
    




# wikipedia search by title route
@flask_app.route('/wikipedia_search_title', methods=['GET'])
def wikipedia_search_by_title():
    page_title = request.args.get('page_title')

    try:
        # Specify a user agent to comply with Wikipedia's policy
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        wiki_wiki = wikipediaapi.Wikipedia('en', headers=headers)

        # Perform the Wikipedia search
        page_py = wiki_wiki.page(page_title)

        if page_py.exists():
            return jsonify({'page_info': {'title': page_py.title, 'text': page_py.text}})
        else:
            return jsonify({'error': 'Wikipedia page not found.'})

    except Exception as e:
        return jsonify({'error': str(e)})
    

@flask_app.route('/tmdb_search_title', methods=['GET'])
def tmdb_search_by_title():
    movie_title = request.args.get('movie_title')

    try:
        api_key = '362bb87240e488e402cc2eb884c43ebc'
        base_url = 'https://api.themoviedb.org/3/search/movie'

        params = {
            'api_key': api_key,
            'query': movie_title,
        }

        response = requests.get(base_url, params=params)

        if response.status_code == 200:
            results = response.json()['results']
            if results:
                movie = results[0]
                movie_info = {
                    'title': movie['title'],
                    'overview': movie['overview'],
                    'release_date': movie['release_date'],
                    'poster_path': movie['poster_path'],
                }
                return jsonify({'movie_info': movie_info})
            else:
                return jsonify({'error': 'Movie not found.'})
        else:
            return jsonify({'error': 'Failed to retrieve movie details.'})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    flask_app.run(debug=True)
