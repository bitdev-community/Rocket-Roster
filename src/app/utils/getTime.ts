'use server';
import { getTime } from '@ignacioaldama/next-demo.modules.get-time';

export async function time() {
  'use server';
  return getTime();
}
