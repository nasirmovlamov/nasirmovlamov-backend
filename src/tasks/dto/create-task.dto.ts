import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  progress: number;
  estimated: number;
  user: User;
}
