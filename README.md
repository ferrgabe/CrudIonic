🚀 Como rodar o projeto
📦 Pré-requisitos
Node.js instalado (versão 20.19+ ou 22.12+)

Ionic CLI instalado globalmente:

```
npm install -g @ionic/cli
▶️ Passo a passo para rodar localmente
```

# 1. Clone este repositório
git clone https://github.com/ferrgabe/CrudIonic.git

# 2. Acesse a pasta do projeto
```
cd app
```

# 3. Instale as dependências do Node
```
npm install
```

# 4. Rode o servidor de desenvolvimento
```
ionic serve
```

O projeto será aberto automaticamente no navegador em http://localhost:8100.

📱 Acessar em outro dispositivo (celular na mesma rede)
Se quiser testar em um celular na mesma rede Wi-Fi:

```
ionic serve --host=0.0.0.0
```
Depois, acesse no celular via navegador:


http://<IP-da-sua-máquina>:8100
Exemplo: http://192.168.0.5:8100

📝 Observações
A pasta node_modules está no .gitignore e é criada novamente com o npm install