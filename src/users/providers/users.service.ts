import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    public findAll() {
        return [
            {
                id: 1,
                name: "John",
                email: "john@gmail.com"
            },
            {
                id: 2,
                name: "John Doe",
                email: "johndoe@gmail.com"
            }
        ]
    }

    public findOnyById(id: number) {
        return [
            {
                id: 1,
                name: "John",
                email: "john@gmail.com"
            }
        ]

    }
}