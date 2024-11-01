import { Position, Affiliation, Interest } from "@prisma/client";

export class UserProfileUpdateDto {
  nickname!: string;
  position?: Position;
  affiliation?: Affiliation;
  bio?: string;
  interests?: Interest[];
  updated_at!: Date;

  constructor(data: Partial<UserProfileUpdateDto>) {
    this.nickname = data.nickname!;
    this.position = data.position;
    this.affiliation = data.affiliation;
    this.bio = data.bio;
    this.interests = data.interests ?? [];
    this.updated_at = new Date();
  }
}
