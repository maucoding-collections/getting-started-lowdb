import { Injectable } from '@nestjs/common';
import { JSONFilePreset } from 'lowdb/node';

@Injectable()
export class AppService {
  async getData(): Promise<any> {
    // initite lowdb
    const db = await JSONFilePreset('db.json', { posts: [] as string[] });

    // sample: insert lowdb
    // await db.update(({ posts }) => posts.push('hello world'));

    return {
      data: db?.data?.posts,
    };
  }
}
