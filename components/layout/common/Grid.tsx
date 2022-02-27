type GridProps = {
  flex: number;
  minWidth?: number;
  children: JSX.Element | JSX.Element[];
};

const Grid: React.FC<GridProps> = (props) => {
  const { children, flex, minWidth } = props;
  return (
    <div
      style={{
        width: `${flex}0%`,
        minWidth,
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
