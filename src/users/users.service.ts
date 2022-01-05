import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'nankim',
            password: 'Password@123'
        },
    ];

    async finOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}