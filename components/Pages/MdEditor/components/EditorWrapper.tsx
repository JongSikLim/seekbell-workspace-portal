import { Editor } from '@toast-ui/react-editor';

const EditorWrapper = () => {
  return (
    <>
      <Editor
        initialValue="안녕하세요 종식입니다."
        // previewStyle="vertical"
        // height="100%"
        // initialEditType="markdown"
        // useCommandShortcut={true}
        plugins={[]}
      />
    </>
  );
};

export default EditorWrapper;
