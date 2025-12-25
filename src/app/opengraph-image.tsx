import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'EGT Software - IT Analytics & Business Intelligence';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
            EGT Software
          </div>
          <div style={{ fontSize: 36, opacity: 0.9 }}>
            IT Analytics & Business Intelligence
          </div>
          <div
            style={{
              fontSize: 24,
              marginTop: 40,
              padding: '10px 30px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 50,
            }}
          >
            Trusted Since 2003
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

