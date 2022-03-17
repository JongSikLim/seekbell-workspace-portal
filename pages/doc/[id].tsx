import { HeadWrapper } from 'components/common';
import dynamic from 'next/dynamic';
import commonAxios from 'utils/apiHelper';

const MdEditor = dynamic(() => import('components/Pages/MdEditor'), {
  ssr: false,
});

const Doc = (props: any) => {

  return (
    <>
      <HeadWrapper
        metaTemplate={{
          html: {
            title: '프로필',
            description: 'Seekbell playground project for nextjs study.',
            imageUrl: 'https://avatars.githubusercontent.com/u/19147143?v=4',
          },
        }}
      />
      {/* <ReactMarkdown children={contents} /> */}
      <MdEditor />
    </>
  );
};

// export const getStaticProps = async (context: any) => {
//   const { id } = context.params;
//   const document = await commonAxios.get('document', { id });

//   return {
//     props: {
//       document,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const documentList = await commonAxios.get('document/list');
//   const idList = documentList.map((doc: any) => doc.id);

//   const paths = idList.map((id: string) => {
//     return {
//       params: { id },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

export default Doc;
