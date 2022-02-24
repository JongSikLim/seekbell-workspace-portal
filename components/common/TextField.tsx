import { Tooltip } from 'antd';
import { useCallback, useState } from 'react';

type TextFieldProps = {
  width: number;
  children: React.ReactNode;
};
const TextField: React.FC<TextFieldProps> = ({ width, children }) => {
  const [isOverflow, setIsOverFlow] = useState<boolean>(false);
  let hiddenRef = useCallback((ref: HTMLSpanElement | null) => {
    if (ref as HTMLSpanElement) {
      let elWidth = (ref as HTMLSpanElement).getBoundingClientRect().width;
      setIsOverFlow(elWidth > width);
    } else {
      setIsOverFlow(false);
    }
  }, []);

  return (
    <>
      <span
        ref={hiddenRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>

      <span
        style={{
          display: 'inline-block',
          width,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {isOverflow ? <Tooltip title={children}>{children}</Tooltip> : children}
      </span>
    </>
  );
};

export default TextField;
