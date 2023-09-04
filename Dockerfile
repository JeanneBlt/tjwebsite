# Stage 1: Builder
FROM node:14.17.5-slim AS builder

WORKDIR /app

# Copier les fichiers de configuration de l'application
COPY package.json yarn.lock ./
RUN yarn install

# Copier tout le code source de l'application
COPY . .

# Construire l'application
RUN yarn build

# Stage 2: Production
FROM nginx:1.21.1-alpine

WORKDIR /usr/share/nginx/html

# Supprimer les fichiers par défaut de Nginx
RUN rm -rf ./*

# Copier les fichiers construits depuis l'étage précédent (builder)
COPY --from=builder /app/dist ./   
# Assurez-vous que les fichiers construits sont dans "/app/dist."

# Configuration optionnelle : Vous pouvez copier les fichiers de configuration Nginx personnalisés ici, le cas échéant.

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
