# Imagem de Origem
FROM node:14-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn
# start app
CMD ["yarn", "start"]