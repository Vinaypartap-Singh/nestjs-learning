import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
    public FindPosts() {
        return "All Posts"
    }
}