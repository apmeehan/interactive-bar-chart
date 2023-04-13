import { XAxis } from './XAxis';
import { YAxis } from './YAxis';

export type Dimension = 'x' | 'y';

export function Axis({
  dimension,
  labels,
}: {
  dimension: Dimension;
  labels: React.ReactNode[];
}) {
  switch (dimension) {
    case 'x':
      return <XAxis labels={labels} />;
    case 'y':
      return <YAxis labels={labels} />;
  }
}
