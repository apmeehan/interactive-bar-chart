export const getNumberOfCategories = ({
  categories,
}: {
  categories: string[];
}): number => categories?.length || 0;

export const getNumberOfSeries = ({ series }: { series: {}[] }): number =>
  series.length || 0;

export const getCategory = (
  { categories }: { categories: (string | undefined)[] },
  index: number,
) => categories[index];

export const getPictogram = (
  { pictograms }: { pictograms?: JSX.Element[] },
  index: number,
) => pictograms?.[index];

export const getSeriesValue = (
  {
    series,
  }: {
    series: { values: number[]; placeholders?: number[] }[];
  },
  seriesIndex: number,
  categoryIndex: number,
) => series[seriesIndex]?.values?.[categoryIndex];

export const getSeriesPlaceholderValue = (
  {
    series,
  }: {
    series: { values: number[]; placeholders?: number[] }[];
  },
  seriesIndex: number,
  categoryIndex: number,
) => series[seriesIndex]?.placeholders?.[categoryIndex];

export const getSeriesColor = (
  {
    series,
  }: {
    series: { values: number[]; placeholders?: number[]; color?: string }[];
  },
  seriesIndex: number,
) => series[seriesIndex]?.color;
