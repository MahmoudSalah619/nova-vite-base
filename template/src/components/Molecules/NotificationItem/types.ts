export interface NotificationItemProps {
  statusId: number;
  statusText: string;
  title: string;
  location: string;
  floor: string;
  users: string[];
  isRead?: boolean;
}
