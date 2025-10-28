import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  LabelList,
} from "recharts";
import COLORS from "@/constants/COLORS";
import Text from "../../../Atoms/Text";
import styles from "../styles.module.scss";

function WorkOrderByProblemBarChart({
  data,
}: {
  data?: { name: string; value: number }[];
}) {
  // @ts-ignore
  const CustomizedLabel = (props) => {
    const { x, y, width, value } = props;

    return (
      <g>
        <text
          x={x + width + 10}
          y={y + 8}
          fill={COLORS.primary700}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };
  return (
    <div className={`${styles.container} ${styles.barLabel}`}>
      <Text variant="P5" color="text50" i18nText="WORK_ORDERS_BY_PROBLEM" />
      <ResponsiveContainer>
        <BarChart
          barCategoryGap={6}
          data={data}
          layout="vertical"
          margin={{ right: 20, left: 20 }}
        >
          <CartesianGrid
            strokeDasharray={0}
            strokeOpacity={0.3}
            vertical={false}
          />
          <Tooltip />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Bar dataKey="value" fill={COLORS.primary400} radius={5}>
            <LabelList dataKey="value" content={<CustomizedLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkOrderByProblemBarChart;
