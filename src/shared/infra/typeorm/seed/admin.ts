import { AppDataSource } from '../app-data-source';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

async function create() {
  await AppDataSource.initialize()
    .then(() => {
      console.log('Data source has been initialized');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });

  const id = uuidv4();

  const password = await hash('admin', 10);

  const rawSeed = await AppDataSource.query(
    `INSERT INTO USERS(id, name, email, password, driver_license, "isAdmin", created_at)
    values('${id}', 'caioAdmin', 'adminCaio@rentx.com.br', '${password}', 'null', true, 'now()')`
  );
}

create()
  .then(() => console.log('User admin created!'))
  .catch((error) => console.log(error));
