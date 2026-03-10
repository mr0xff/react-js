# Estágio 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio 2: Runtime com Nginx
FROM nginx:alpine
# Remove a config padrão e copia a nossa
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia os ficheiros do build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]