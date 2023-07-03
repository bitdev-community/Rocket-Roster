import type { AllLaunchesRes } from './types/all-launches';
import type { SingleLaunchRes } from './types/single-launch';
import type { MultipleRocketsRes } from './types/all-rockets';
import type { SingleRocketRes } from './types/single-rocket';

class Url {
  constructor(path: string, base: string) {
    let options = {
      isRelativePath: path.startsWith('/'),
      baseEndsWithSlash: base.endsWith('/'),
    };

    path = options.isRelativePath ? path : `/${path}`;
    base = options.baseEndsWithSlash ? base.slice(0, -1) : base;

    this.url = new URL(`${base}${path}`);
  }

  url: URL;

  get href() {
    return this.url.href;
  }

  get pathname() {
    return this.url.pathname;
  }

  get search() {
    return this.url.search;
  }

  get hash() {
    return this.url.hash;
  }

  get hostname() {
    return this.url.hostname;
  }
}

export class LaunchsClient {
  static url = 'https://ll.thespacedevs.com/2.2.0';

  async fetch(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async getUpcomingLaunches({
    mode = 'normal',
    search = undefined,
    limit = undefined,
  }: {
    mode?: 'list' | 'detailed' | 'normal';
    search?: string;
    limit?: number;
  }) {
    const { url } = new Url('/launch/upcoming', LaunchsClient.url);

    if (mode) {
      url.searchParams.append('mode', mode);
    }

    if (search) {
      url.searchParams.append('search', search);
    }

    if (limit) {
      url.searchParams.append('limit', limit.toString());
    }

    const data = await this.fetch(url.href);
    return data as AllLaunchesRes;
  }

  async getPreviousLaunches({
    mode = 'normal',
    search = undefined,
    limit = undefined,
  }: {
    mode?: 'list' | 'detailed' | 'normal';
    search?: string;
    limit?: number;
  }) {
    const { url } = new Url('/launch/previous', LaunchsClient.url);

    if (mode) {
      url.searchParams.append('mode', mode);
    }

    if (search) {
      url.searchParams.append('search', search);
    }

    if (limit) {
      url.searchParams.append('limit', limit.toString());
    }

    const data = await this.fetch(url.href);
    return data as AllLaunchesRes;
  }
}
