import { Dimension } from './Axis';
import { Axis } from './Axis';

export function YAxis({ labels = [] }: { labels: React.ReactNode[] }) {
  return <Axis dimension={Dimension.Y} labels={labels} />;
}
