import HeadComponent from 'next/head';

type MetaTemplate = {
  html: {
    title: string;
    description: string;
    imageUrl?: string;
    keywords?: string[];
    author?: string;
  };
  og?: {
    title: string;
    description: string;
    imageUrl: string;
    keywords: string[];
    author: string;
  };
};

type HeadWrapperProps = { metaTemplate: MetaTemplate };

const HeadWrapper: React.FC<HeadWrapperProps> = ({ metaTemplate }) => {
  const { html, og = undefined } = metaTemplate;
  const {
    title,
    description,
    imageUrl = 'https://avatars.githubusercontent.com/u/19147143?v=4',
    keywords = ['seekbell', 'jsim', '임종식', 'nextjs'],
    author = '임종식',
  } = html;

  return (
    <HeadComponent>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="title" content={title} key="title" />
      <meta property="description" content={description} key="description" />
      <meta property="image" content={imageUrl} />
      <meta property="keywords" content={keywords.join(',')} />
      <meta name="author" content={author} />

      {og ? (
        <>
          <meta property="og:title" content={og.title} key="title" />
          <meta
            property="og:description"
            content={og.description}
            key="description"
          />
          <meta property="og:image" content={og.imageUrl} />
          <meta property="og:keywords" content={og.keywords.join(',')} />
          <meta name="author" content={og.author} />
        </>
      ) : (
        <>
          <meta property="og:title" content={title} key="title" />
          <meta
            property="og:description"
            content={description}
            key="description"
          />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:keywords" content={keywords.join(',')} />
          <meta name="author" content={author} />
        </>
      )}
    </HeadComponent>
  );
};

export default HeadWrapper;
