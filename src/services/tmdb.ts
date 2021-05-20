import axios from 'axios';

interface MovieApi {
  getNowPlaying(): Promise<unknown>;
  getPopular(): Promise<unknown>;
  getUpcoming(): Promise<unknown>;
  getDetails(id: number): Promise<unknown>;
  search(term: string): Promise<unknown>;
}

interface TvApi {
  getAiringToday(): Promise<unknown>;
  getPopular(): Promise<unknown>;
  getTopRated(): Promise<unknown>;
  getDetails(id: number): Promise<unknown>;
  search(term: string): Promise<unknown>;
}

class Tmdb {
  protected tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
    },
  });
}

class TmdbMovie extends Tmdb implements MovieApi {
  async getNowPlaying() {
    const response = await this.tmdb.get('movie/now_playing');
    return response.data.results;
  }

  async getPopular() {
    const response = await this.tmdb.get('movie/popular');
    return response.data.results;
  }

  async getUpcoming() {
    const response = await this.tmdb.get('movie/upcoming');
    return response.data.results;
  }

  async getDetails(id: number) {
    const response = await this.tmdb.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    return response.data.results;
  }

  async search(term: string) {
    const response = await this.tmdb.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    });
    return response.data.results;
  }
}

class TmdbTv extends Tmdb implements TvApi {
  async getAiringToday() {
    const response = await this.tmdb.get('tv/airing_today');
    return response.data.results;
  }

  async getPopular() {
    const response = await this.tmdb.get('tv/popular');
    return response.data.results;
  }

  async getTopRated() {
    const response = await this.tmdb.get('movie/top_rated');
    return response.data.results;
  }

  async getDetails(id: number) {
    const response = await this.tmdb.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    return response.data.results;
  }

  async search(term: string) {
    const response = await this.tmdb.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    });
    return response.data.results;
}

export const movie = new TmdbMovie();
export const tv = new TmdbTv();
