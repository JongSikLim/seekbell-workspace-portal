type NumberFormatTextProps = {
  value: number;
};
const NumberFormatText: React.FC<NumberFormatTextProps> = ({ value }) => {
  return <>{`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</>;
};

export default NumberFormatText;
