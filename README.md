# API REST con Autenticación JWT y CRUD de Tareas

## Descripción del Proyecto
Backend desarrollado en Node.js + Express con autenticación JWT para la gestión de tareas con aislamiento de datos. La API permite registrar usuarios, autenticarlos mediante tokens JWT y ofrece un CRUD completo de tareas protegido con Bearer Token, garantizando que cada usuario solo pueda consultar, modificar y eliminar sus propias tareas.

## Requisitos Previos
- Node.js (v14 o superior)
- npm
- Cuenta de MongoDB Atlas (o servidor local de MongoDB)

## Configuración del Entorno
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```
2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto tomando como guía el archivo `.env.example`.
   - Define los valores de `PORT`, `MONGO_URI` y `JWT_SECRET`.

## Ejecución del Servidor
Para iniciar el backend en modo desarrollo:
```bash
npm start
```
O ejecutando directamente con Node:
```bash
node backend/server.js
```

## Lista de Endpoints de la API

### Autenticación y Usuarios (`/api/users`)
| Método | Ruta | Descripción | ¿Requiere Token? |
| --- | --- | --- | --- |
| `POST` | `/api/users` | Registrar un nuevo usuario | No |
| `POST` | `/api/users/login` | Iniciar sesión y obtener el token JWT | No |
| `GET` | `/api/users/datos` | Obtener la información del usuario autenticado | Sí |

### Gestión de Tareas (`/api/tareas`)
*Todas las rutas de tareas utilizan el middleware de autenticación `protect`.*

| Método | Ruta | Descripción | ¿Requiere Token? |
| --- | --- | --- | --- |
| `GET` | `/api/tareas` | Listar únicamente las tareas del usuario logueado | Sí |
| `POST` | `/api/tareas` | Crear una nueva tarea asignada al usuario logueado | Sí |
| `PUT` | `/api/tareas/:id` | Modificar una tarea propia | Sí |
| `DELETE` | `/api/tareas/:id` | Eliminar una tarea propia | Sí |