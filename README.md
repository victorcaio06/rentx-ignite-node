# Cadastro de carro

**RF**

- [x] RF01 Deve ser possível cadastrar um novo carro.

**RN**

- [x] RN01 Não deve ser possível cadastrar um carro com uma placa já existente.

- [x] RN02 O carro deve ser cadastrado, por padrão, com disponibilidade.

- * [] RN03 O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

- [] RF02 Deve ser possível listar todos os carros disponíveis.

- [] RF03 Deve ser possível listar todos os carros disponível pelo nome da categoria.

- [] RF04 Deve ser possível listar todos os carros disponível pelo nome da marca.

- [] RF05 Deve ser possível listar todos os carros disponível pelo nome do carro.

**RN**

- [] RN03 O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

- [] RF06 Deve ser possível cadastrar uma especificação para um carro.

- [] RF07 Deve ser possível listar todas as especificações.

- [] RF08 Deve ser possível listar todos os carros.

**RN**

- [] RN04 Não deve ser possível cadastrar uma especificação para um carro não cadastrado.

- [] RN05 Não deve ser possível cadastrar uma especificação já existente no mesmo carro.

- [] RN06 O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro.

**RF**

- [] RF09 Deve ser possível cadastrar a imagem do carro.

- [] RF10 Deve ser possível listar todos os carros.

**RNF**

- [] RNF01 Utilizar o Multer para o upload dos arquivos.

**RN**

- [] RN07 O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.

- [] RN08 O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

**RF**

- [] RF11 Deve ser possível cadastrar um aluguel.

**RNF**

**RN**

- [] RN09 O aluguel deve ter duração mínima de 24 horas.

- [] RN10 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.

- [] RN11 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
