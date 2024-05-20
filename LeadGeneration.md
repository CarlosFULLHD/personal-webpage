### Plan para Desarrollar y Desplegar una Aplicación de Cuestionarios para Generación de Leads

#### **Objetivo:**

Identificar problemas de los consumidores, ofrecer encuestas que les entreguen valor y recursos de ayuda según sus respuestas, y obtener sus datos para guardarlos en una base de datos. Integrar con Beehiv para segmentación y envío de emails, y Plausible para análisis de comportamiento del usuario.

### **Tecnologías a Utilizar:**

- **Backend:**
  - **Framework:** Spring Boot (Java)
  - **Despliegue:** Railway
- **Base de Datos:**
  - **Base de Datos:** PostgreSQL
  - **Proveedor:** Supabase
- **Frontend:**
  - **Framework:** Next.js 14
  - **Despliegue:** Vercel (Inicialmente gratuito, luego considerar Railway o un VPS)
- **Terceros:**
  - **Email Marketing:** Beehiv
  - **Análisis de Comportamiento:** Plausible

### **Desarrollo Necesario:**

#### **1. Diseño de la Base de Datos (Supabase):**

- **Usuarios (users):**

  ```sql
  CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Encuestas (surveys):**

  ```sql
  CREATE TABLE surveys (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title VARCHAR(255) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Preguntas (questions):**

  ```sql
  CREATE TABLE questions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      survey_id UUID REFERENCES surveys(id) ON DELETE CASCADE,
      question_text TEXT NOT NULL,
      question_type VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Respuestas (responses):**
  ```sql
  CREATE TABLE responses (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      survey_id UUID REFERENCES surveys(id) ON DELETE CASCADE,
      question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
      response_text TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

#### **2. Desarrollo del Backend (Spring Boot en Railway):**

**Estructura del Proyecto:**

- Configura un proyecto Spring Boot con las dependencias necesarias.
- Crea controladores, servicios y repositorios para manejar las encuestas y respuestas.

**Configuración en `application.properties`:**

```properties
spring.datasource.url=jdbc:postgresql://<SUPABASE_DB_URL>:5432/<DATABASE_NAME>
spring.datasource.username=<SUPABASE_DB_USERNAME>
spring.datasource.password=<SUPABASE_DB_PASSWORD>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**Endpoints Básicos:**

- **Crear Encuesta**
- **Obtener Encuestas**
- **Enviar Respuestas de Encuestas**

#### **3. Desarrollo del Frontend (Next.js 14 en Vercel):**

**Formulario de Encuesta:**

- Crea componentes de React para manejar los formularios de encuestas.
- Configura los endpoints para enviar y recibir datos del backend.

#### **4. Integración con Beehiv para Emails:**

**Envio de Emails:**

- Crea un servicio en Spring Boot para integrar con la API de Beehiv.
- Utiliza el servicio para añadir suscriptores y enviar emails segmentados según las respuestas.

#### **5. Análisis con Plausible:**

**Integración de Plausible:**

- Añade el script de seguimiento de Plausible a tu aplicación Next.js para rastrear el comportamiento del usuario.

### **Costos Aproximados por Proveedor:**

#### **1. Railway:**

- **Hobby Plan:** $5/mes por servicio
- **Pro Plan:** $20/mes por asiento

#### **2. Supabase:**

- **Free Tier:** Gratis (Incluye 500 MB de almacenamiento y 2 GB de transferencia)
- **Pro Plan:** $25/mes (Incluye 8 GB de almacenamiento y 500 GB de transferencia)

#### **3. Vercel:**

- **Free Tier:** Gratis inicialmente
- **Pro Plan:** Desde $20/mes si se decide mover a un VPS o a Railway en el futuro.

#### **4. Beehiv:**

- **Launch Plan:** $0 (Gratis hasta 2,500 suscriptores)
- **Scale Plan:** $39/mes

#### **5. Plausible:**

- **Plausible Analytics:** $9/mes para el plan básico

### **Plan de Desarrollo:**

#### **Fase 1: Configuración Inicial**

- Configurar proyectos en Railway, Supabase y Vercel.
- Configurar las bases de datos y despliegues iniciales.

#### **Fase 2: Desarrollo del Backend y Frontend**

- Desarrollar la lógica de encuestas en Spring Boot.
- Desarrollar la interfaz de usuario en Next.js.
- Integrar ambos con endpoints RESTful.

#### **Fase 3: Integraciones**

- Configurar la integración con Beehiv para la gestión de emails.
- Configurar Plausible para el análisis de comportamiento del usuario.

#### **Fase 4: Pruebas y Despliegue**

- Realizar pruebas exhaustivas de todas las funcionalidades.
- Desplegar la aplicación en producción.
