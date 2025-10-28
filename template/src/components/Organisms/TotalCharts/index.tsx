import { Area, AreaChart, CartesianGrid, ResponsiveContainer } from "recharts";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import COLORS from "@/constants/COLORS";

export default function TotalChart({ data }: { data?: [] }) {
  const fakeData = [
    { month: "", orders: 0 },
    { month: "Jan", orders: 4400 },
    { month: "Feb", orders: 4798 },
    { month: "Mar", orders: 6398 },
    { month: "Apr", orders: 8398 },
    { month: "May", orders: 7398 },
    { month: "Jun", orders: 5198 },
    { month: "Jul", orders: 9398 },
    { month: "Aug", orders: 8398 },
    { month: "Sep", orders: 3398 },
    { month: "Oct", orders: 2398 },
    { month: "Nov", orders: 3398 },
    { month: "Dec", orders: 10398 },
  ];
  return (
    <div className={styles.graphCon}>
      <div className={styles.container}>
        <Text variant="P7" i18nText="Total Visits" />
        <Text variant="P7">100,000</Text>
        <ResponsiveContainer minHeight={100}>
          <AreaChart data={data || fakeData}>
            <CartesianGrid
              strokeDasharray={0}
              strokeOpacity={0.3}
              vertical={false}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke={COLORS.primary400}
              strokeWidth={2}
              fill={COLORS.primary400}
              fillOpacity={0.09}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.container}>
        <Text variant="P7" i18nText="Total Customers" />
        <Text variant="P7">20,000</Text>
        <ResponsiveContainer>
          <AreaChart height={135} data={data || fakeData}>
            <CartesianGrid
              strokeDasharray={0}
              strokeOpacity={0.3}
              vertical={false}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke={COLORS.primary400}
              strokeWidth={2}
              fill={COLORS.primary400}
              fillOpacity={0.09}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.container}>
        <Text variant="P7" i18nText="Total Merchants" />
        <Text variant="P7">380</Text>
        <ResponsiveContainer>
          <AreaChart height={135} data={data || fakeData}>
            <CartesianGrid
              strokeDasharray={0}
              strokeOpacity={0.3}
              vertical={false}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke={COLORS.primary400}
              strokeWidth={2}
              fill={COLORS.primary400}
              fillOpacity={0.09}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
