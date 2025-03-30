import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  type: string;
  subject?: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  type,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <h2 style={{ color: '#333', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
      Nuevo mensaje de contacto
    </h2>

    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold', width: '120px' }}>Nombre:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{name}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Email:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
            <a href={`mailto:${email}`} style={{ color: '#0070f3', textDecoration: 'none' }}>
              {email}
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Tipo:</td>
          <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{type}</td>
        </tr>
        {subject && (
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Asunto:</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{subject}</td>
          </tr>
        )}
      </tbody>
    </table>

    <div>
      <h3 style={{ color: '#333', marginTop: '16px' }}>Mensaje:</h3>
      <div style={{
        backgroundColor: '#f7f7f7',
        padding: '12px',
        borderRadius: '4px',
        whiteSpace: 'pre-wrap'
      }}>
        {message}
      </div>
    </div>

    <div style={{ marginTop: '24px', borderTop: '1px solid #eee', paddingTop: '12px', color: '#666', fontSize: '12px' }}>
      Este mensaje fue enviado desde el formulario de contacto del sitio web.
    </div>
  </div>
);