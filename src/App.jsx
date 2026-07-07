import React, { useState } from 'react';

const slides = [
  {
    title: "Implementación e Infraestructura en Windows Server",
    subtitle: "Presentación Ejecutiva - Proyecto PAESCA",
    institution: "INACAP Valparaíso",
    author: "Scarlet Páez",
    course: "Administración de Sistemas Operativos Corporativos",
    professor: "Docente: Rubén Schnettler",
    isPortada: true
  },
  {
    title: "1. Arquitectura Lógica y Topología de Red",
    points: [
      "Objetivo: Diseñar una plataforma centralizada (Wiki) para documentar servicios core y políticas de seguridad corporativas.",
      "Modelo de Red: Arquitectura Cliente-Servidor centralizada bajo virtualización segura.",
      "Controlador de Dominio (DC): Servidor central encargado de la autenticación, DNS y DHCP.",
      "Estación de Trabajo (Cliente): Equipo Windows integrado para validar directivas de seguridad en red."
    ]
  },
  {
    title: "2. Configuración Base y Active Directory",
    points: [
      "Aprovisionamiento Base: Instalación limpia del SO, credenciales administrativas y Hostname formal del servidor.",
      "Active Directory (AD DS): Promoción del servidor a Controlador de Dominio principal.",
      "Estructura de Bosque: Inicialización del bosque raíz bajo el dominio local 'inacap.local'.",
      "Soporte DNS: Configuración integrada para resolver zonas directas e inversas de la organización."
    ]
  },
  {
    title: "3. Gestión de Objetos y Roles Core (DHCP)",
    points: [
      "Estructura Organizativa: Creación de Unidades Organizativas (OU), cuentas de soporte y grupos globales.",
      "Servicio DHCP: Implementación del rol DHCP Server para automatizar el direccionamiento IP corporativo.",
      "Parámetros del Ámbito: Configuración de rangos IPv4 con exclusiones técnicas específicas.",
      "Enlace Automático: Distribución automática de puerta de enlace y sufijos DNS hacia las estaciones cliente."
    ]
  },
  {
    title: "4. Seguridad y Políticas de Grupo (GPOs)",
    points: [
      "Seguridad Lógica: Diseño y despliegue de Objetos de Directiva de Grupo (GPO) vinculados a las OUs.",
      "Endurecimiento del Sistema: Restricción administrativa total del Panel de Control en los clientes.",
      "Auditoría de Cumplimiento: Aplicación y verificación visual tras forzar la actualización de directivas en los puestos de trabajo."
    ]
  },
  {
    title: "5. Conclusión y Co-Creación (Bitácora IA)",
    points: [
      "Plataforma SPA: Migración de documentación estática a una aplicación interactiva usando React, Vite y CSS-in-JS.",
      "Ingeniería de Prompts: Bitácora histórica detallada que registra la co-creación con IA para el enrutamiento dinámico.",
      "Respaldo y Disponibilidad: Despliegue automático y redundante a través de Vercel y GitHub para el acceso técnico."
    ]
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => { if (current < slides.length - 1) setCurrent(current + 1); };
  const prevSlide = () => { if (current > 0) setCurrent(current - 1); };

  const slide = slides[current];

  return (
    <div style={{
      backgroundColor: '#111827', color: '#f3f4f6', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', fontFamily: 'sans-serif', padding: '20px', boxSizing: 'border-box'
    }}>
      {/* Contenedor Diapositiva */}
      <div style={{
        backgroundColor: '#1f2937', width: '100%', maxWidth: '900px', height: '500px',
        borderRadius: '12px', padding: '40px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        borderTop: '8px solid #ef4444', boxSizing: 'border-box'
      }}>
        
        {slide.isPortada ? (
          /* Render Portada */
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <span style={{ backgroundColor: '#ef4444', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              PRESENTACIÓN EJECUTIVA
            </span>
            <h1 style={{ fontSize: '32px', marginTop: '15px', color: '#ffffff' }}>{slide.title}</h1>
            <p style={{ color: '#9ca3af', fontSize: '18px', marginBottom: '30px' }}>{slide.subtitle}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '14px', borderTop: '1px solid #374151', paddingTop: '20px', color: '#cbd5e1' }}>
              <div><strong>Estudiante:</strong> {slide.author}<br/><strong>Institución:</strong> {slide.institution}</div>
              <div><strong>Curso:</strong> {slide.course}<br/><strong>{slide.professor}</strong></div>
            </div>
          </div>
        ) : (
          /* Render Contenido Normal */
          <div>
            <h2 style={{ fontSize: '26px', color: '#ef4444', marginBottom: '25px', borderBottom: '2px solid #374151', paddingBottom: '10px' }}>
              {slide.title}
            </h2>
            <ul style={{ paddingLeft: '20px', margin: '0' }}>
              {slide.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '18px', marginBottom: '15px', lineHeight: '1.6', color: '#e5e7eb' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Barra de Navegación Inferior */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #374151', paddingTop: '15px' }}>
          <span style={{ fontSize: '14px', color: '#9ca3af' }}>
            Inacap Valparaíso • Diapositiva {current + 1} de {slides.length}
          </span>
          <div>
            <button onClick={prevSlide} disabled={current === 0} style={{
              padding: '8px 16px', marginRight: '10px', backgroundColor: current === 0 ? '#4b5563' : '#ef4444',
              color: '#fff', border: 'none', borderRadius: '6px', cursor: current === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold'
            }}>
              Anterior
            </button>
            <button onClick={nextSlide} disabled={current === slides.length - 1} style={{
              padding: '8px 16px', backgroundColor: current === slides.length - 1 ? '#4b5563' : '#ef4444',
              color: '#fff', border: 'none', borderRadius: '6px', cursor: current === slides.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold'
            }}>
              Siguiente
            </button>
          </div>
        </div>

      </div>

      {/* Enlaces Informativos abajo del todo - Corregido */}
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>
        Repositorio de la Presentación: <a href="https://github.com/scarletpaez-2001/presentacion_windows_paesca" target="_blank" rel="noreferrer" style={{color: '#ef4444', textDecoration: 'none'}}>GitHub Diapositivas</a>
      </div>
    </div>
  );
}