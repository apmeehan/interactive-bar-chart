import { Dimension } from './Axis';
import { Axis } from './Axis';

export function XAxis({ labels = [] }: { labels: React.ReactNode[] }) {
  return <Axis dimension={Dimension.X} labels={labels} />;
}
