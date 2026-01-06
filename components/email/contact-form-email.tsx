import * as React from 'react';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service: string;
  budget?: string;
  message: string;
  referral?: string;
}

export function ContactFormEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  website,
  service,
  budget,
  message,
  referral,
}: ContactFormEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#000000', padding: '32px', textAlign: 'center' }}>
        <h1 style={{ color: '#00FF00', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          New Contact Form Submission
        </h1>
      </div>
      
      <div style={{ backgroundColor: '#ffffff', padding: '32px' }}>
        <h2 style={{ color: '#000000', fontSize: '20px', marginBottom: '24px' }}>
          Contact Information
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Name:</td>
            <td style={{ padding: '8px 0', color: '#000' }}>{firstName} {lastName}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Email:</td>
            <td style={{ padding: '8px 0', color: '#000' }}>
              <a href={`mailto:${email}`} style={{ color: '#00FF00' }}>{email}</a>
            </td>
          </tr>
          {phone && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Phone:</td>
              <td style={{ padding: '8px 0', color: '#000' }}>{phone}</td>
            </tr>
          )}
        </table>

        {(company || website) && (
          <>
            <h2 style={{ color: '#000000', fontSize: '20px', marginTop: '32px', marginBottom: '24px' }}>
              Business Information
            </h2>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              {company && (
                <tr>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Company:</td>
                  <td style={{ padding: '8px 0', color: '#000' }}>{company}</td>
                </tr>
              )}
              {website && (
                <tr>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Website:</td>
                  <td style={{ padding: '8px 0', color: '#000' }}>
                    <a href={website} style={{ color: '#00FF00' }}>{website}</a>
                  </td>
                </tr>
              )}
            </table>
          </>
        )}

        <h2 style={{ color: '#000000', fontSize: '20px', marginTop: '32px', marginBottom: '24px' }}>
          Project Details
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Service Interest:</td>
            <td style={{ padding: '8px 0', color: '#000' }}>{service}</td>
          </tr>
          {budget && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#666' }}>Budget Range:</td>
              <td style={{ padding: '8px 0', color: '#000' }}>{budget}</td>
            </tr>
          )}
        </table>

        <h2 style={{ color: '#000000', fontSize: '20px', marginTop: '32px', marginBottom: '16px' }}>
          Message
        </h2>
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '16px', 
          borderRadius: '8px',
          color: '#000',
          lineHeight: '1.6'
        }}>
          {message}
        </div>

        {referral && (
          <>
            <h2 style={{ color: '#000000', fontSize: '20px', marginTop: '32px', marginBottom: '16px' }}>
              Referral Source
            </h2>
            <p style={{ color: '#666', margin: 0 }}>{referral}</p>
          </>
        )}
      </div>

      <div style={{ backgroundColor: '#f5f5f5', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
          This email was sent from the PodLab contact form
        </p>
      </div>
    </div>
  );
}
