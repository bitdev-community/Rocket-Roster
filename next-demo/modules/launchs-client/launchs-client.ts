/* eslint-disable max-classes-per-file */
import type { AllLaunchesRes } from './types/all-launches';

class Url {
  constructor(path: string, base: string) {
    const options = {
      isRelativePath: path.startsWith('/'),
      baseEndsWithSlash: base.endsWith('/'),
    };

    const urlpath = options.isRelativePath ? path : `/${path}`;
    const urlbase = options.baseEndsWithSlash ? base.slice(0, -1) : base;

    this.url = new URL(`${urlbase}${urlpath}`);
  }

  url: URL;
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
