# 🐾 Pacientes de Veterinaria - React App

## 📌 Descripción

Aplicación web desarrollada en **React** que permite **gestionar citas en una veterinaria**. A través de un formulario, se pueden registrar pacientes con todos sus datos obligatorios, y además se pueden **eliminar citas**. Las citas se guardan automáticamente en el **LocalStorage**, asegurando su persistencia aunque se recargue la página.

---

## 🧩 Funcionalidades

- 📋 Formulario de carga de citas con los siguientes campos:
  - Nombre de la mascota
  - Nombre del dueño
  - Fecha
  - Hora
  - Síntomas

> Todos los campos son **obligatorios**.  
> Si el usuario intenta enviar el formulario con campos vacíos, se muestra un mensaje de error.

- 💾 Guardado de las citas en `localStorage`.
- 🗑️ Eliminación de citas individuales.
- 🔁 Sincronización automática del estado con `localStorage`.

---

## 🛠️ Tecnologías utilizadas

- **React**
- **React Hooks (`useState`, `useEffect`)**
- **Bootstrap o CSS personalizado** (según elección)
- **LocalStorage** para persistencia de datos

---

## ▶️ Cómo ejecutar el proyecto

1. 📥 Clonar o descargar este repositorio.
2. 📦 Ejecutar `npm install` para instalar dependencias.
3. ▶️ Ejecutar `npm start` para iniciar el proyecto.
4. 🌐 Acceder a `http://localhost:3000` desde el navegador.

---

## 👨‍💻 Autor

**Juan Manuel Blanco**

---

## 🎯 Objetivo educativo

Este proyecto tiene como finalidad reforzar los siguientes conceptos en React:

- Manejo de formularios y validaciones.
- Estructura de componentes reutilizables.
- Uso de `localStorage` para persistencia de datos.
- Buenas prácticas con `useEffect` para sincronización de datos.

---

¡Gestioná a tus pacientes peludos de forma simple y eficiente! 🐶🐱🩺