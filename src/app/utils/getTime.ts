'use server';
import { getTime } from '@learnbit-react/rocket-roster.modules.get-time';

export async function time(lang: string) {
  return getTime(lang);
}
