import { createConnection } from 'typeorm';
import { User } from './user/entities/user.entity';

async function seed() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'myuser',
    password: 'mypassword',
    database: 'user_db',
    entities: [User],
    synchronize: true,
  });

  const userRepository = connection.getRepository(User);

  const user = new User();
  user.username = 'testuser';
  user.password = 'password';
  user.email = 'test@example.com';

  await userRepository.save(user);
  console.log('Seeding completed!');

  await connection.close();
}

seed().catch(console.error);
