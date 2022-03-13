import { Viewer } from '@toast-ui/react-editor';
import readme from './readme';
import Styles from 'styles/common/markdown.module.scss';

const Intro = () => {
  return (
    <div className={Styles.markdownContainer}>
      <Viewer initialValue={readme} />
    </div>
  );
};

export default Intro;
