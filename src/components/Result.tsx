import { FC } from 'react';

type Props = {
  value: string;
};

const Result: FC<Props> = ({ value }: Props) => (
  <div className="result">{value !== '' ? value : '0'}</div>
);

Result.defaultProps = {
  value: '0',
};

export default Result;
