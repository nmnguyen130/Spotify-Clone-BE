import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // Local DB
  // Local Array
  private readonly songs = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // Fetch the songs from the db
    // Error comes while fetching the data from DB
    throw new Error('Error in DB while fetching record!');
    return this.songs;
  }
}
