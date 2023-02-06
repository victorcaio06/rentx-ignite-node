# Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro.

**Regra de negócio**

- [x] RN01 Não deve ser possível cadastrar um carro com uma placa já existente.

- [] RN02 O carro deve ser cadastrado, por padrão, com disponibilidade.

- [] RN03 O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

- Deve ser possível listar todos os carros disponíveis.

- Deve ser possível listar todos os carros disponível pelo nome da categoria.

- Deve ser possível listar todos os carros disponível pelo nome da marca.

- Deve ser possível listar todos os carros disponível pelo nome do carro.

**RN**

- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.

- Deve ser possível listar todas as especificações.

- Deve ser possível listar todos os carros.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.

- Não deve ser possível cadastrar uma especificação já existente no mesmo carro.

- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro.

**RF**

- Deve ser possível cadastrar a imagem do carro.

- Deve ser possível listar todos os carros.

**RNF**

- Utilizar o Multer para o upload dos arquivos.

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.

- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

**RF**

- Deve ser possível cadastrar um aluguel.

**RNF**

**RN**

- O aluguel deve ter duração mínima de 24 horas.

- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.

- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
