import React, { useState } from 'react';

const slides = [
  {
    title: "Implementación e Infraestructura en Windows Server",
    subtitle: "Presentación Ejecutiva e Interactiva - Proyecto PAESCA",
    institution: "INACAP Valparaíso",
    author: "Scarlet Páez",
    course: "Sistemas Operativos",
    professor: "Docente: Rubén Schnettler",
    isPortada: true
  },
  {
    title: "Paso 1: Instalación y Configuración Base del Sistema",
    points: [
      "Aquí se puede apreciar la instalación del sistema operativo Windows Server",
      "Aprovisionamiento base mediante entorno virtualizado seguro.",
      "Asignación del Hostname formal del Servidor Corporativo.",
      "Configuración de direccionamiento IP estático e interfaces de red."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/instalacion_server.png"
  },
  {
    title: "Paso 2: Despliegue de Active Directory (AD DS)",
    points: [
      "Promoción del servidor a Controlador de Dominio principal.",
      "Inicialización del bosque raíz bajo el dominio local 'inacap.local'.",
      "Configuración e integración nativa del rol de servidor DNS."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/nombre_dominio.png"
  },
  {
    title: "Paso 3: Administración de Objetos de Dominio",
    points: [
      "Diseño de la estructura jerárquica mediante Unidades Organizativas (OU).",
      "Creación de cuentas de usuario de soporte y grupos de seguridad.",
      "Delegación técnica de accesos y control de identidades corporativas."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/creacion_usuario_s.png"
  },
  {
    title: "Paso 4: Implementación del Servicio DHCP",
    points: [
      "Activación del rol DHCP Server para automatización de la red interna.",
      "Configuración de Ámbito IPv4 y definición de rangos de exclusión.",
      "Distribución dinámica de la Puerta de Enlace y Sufijo DNS a clientes."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/ambito_nuevo.png"
  },
  {
    title: "Paso 5: Directivas de Grupo (GPO) y Seguridad",
    points: [
      "Diseño de directivas restrictivas para el endurecimiento del entorno.",
      "Bloqueo absoluto del Panel de Control en las estaciones de trabajo.",
      "Aplicación obligatoria de políticas de seguridad lógica institucional."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/prohibicion_panel_control.png"
  },
  {
    title: "Paso 6: Incorporación y Validación del Cliente",
    points: [
      "Integración de la estación de trabajo Windows Cliente al dominio.",
      "Auditoría visual del éxito tras forzar la actualización de directivas.",
      "Validación de credenciales centralizadas y restricciones operativas."
    ],
    imgUrl: "https://raw.githubusercontent.com/scarletpaez-2001/wiki_paesca/main/public/img_paesca/creacion_vm_cliente.png"
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
        backgroundColor: '#1f2937', width: '100%', maxWidth: '1000px', minHeight: '520px',
        borderRadius: '12px', padding: '40px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        borderTop: '8px solid #ef4444', boxSizing: 'border-box'
      }}>
        
        {slide.isPortada ? (
          /* Render Portada */
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <span style={{ backgroundColor: '#ef4444', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              PRESENTACIÓN INTERACTIVA
            </span>
            <h1 style={{ fontSize: '34px', marginTop: '15px', color: '#ffffff' }}>{slide.title}</h1>
            <p style={{ color: '#9ca3af', fontSize: '18px', marginBottom: '30px' }}>{slide.subtitle}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '14px', borderTop: '1px solid #374151', paddingTop: '20px', color: '#cbd5e1' }}>
              <div><strong>Estudiante:</strong> {slide.author}<br/><strong>Institución:</strong> {slide.institution}</div>
              <div><strong>Curso:</strong> {slide.course}<br/><strong>{slide.professor}</strong></div>
            </div>
          </div>
        ) : (
          /* Render Contenido Normal con Imagen al lado derecho */
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '24px', color: '#ef4444', marginBottom: '20px', borderBottom: '2px solid #374151', paddingBottom: '10px' }}>
                {slide.title}
              </h2>
              <ul style={{ paddingLeft: '20px', margin: '0' }}>
                {slide.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '16px', marginBottom: '12px', lineHeight: '1.5', color: '#e5e7eb' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contenedor de la Imagen */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={slide.imgUrl} 
                alt="Evidencia Técnica"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '280px', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  border: '1px solid #4b5563',
                  backgroundColor: '#374151'
                }} 
              />
            </div>
          </div>
        )}

        {/* Barra de Navegación Inferior */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #374151', paddingTop: '15px', marginTop: '20px' }}>
          <span style={{ fontSize: '14px', color: '#9ca3af' }}>
            Inacap Valparaíso • Paso {current} / 6
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

      {/* Enlaces Informativos abajo del todo */}
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>
        Repositorio de la Presentación: <a href="https://github.com/scarletpaez-2001/presentacion_paesca" target="_blank" rel="noreferrer" style={{color: '#ef4444', textDecoration: 'none'}}>GitHub Diapositivas</a>
      </div>
    </div>
  );
}