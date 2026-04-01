import Head from 'next/head';

interface SchemaMarkupProps {
  schemas: Record<string, any>[];
}

export default function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      ))}
    </Head>
  );
}
