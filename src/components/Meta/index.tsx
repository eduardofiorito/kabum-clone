export type MetaProps = {
  title: string;
  description: string;
  ogImage: string;
};

export function Meta({ title, description, ogImage }: MetaProps) {
  return (
    <>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage}></meta>
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
