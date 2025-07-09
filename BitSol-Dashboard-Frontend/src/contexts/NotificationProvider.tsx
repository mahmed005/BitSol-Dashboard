import {
  createContext,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";

export type ContextProps = {
  value: boolean;
  toggle(): void;
};

export const notificationContext = createContext<ContextProps>({
  value: false,
  toggle() {},
});

export default function NotificationProvider(props: PropsWithChildren) {
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);

  const toggleNotifications = useCallback(
    function () {
      setIsNotificationClicked((prevState) => !prevState);
    },
    [setIsNotificationClicked]
  );

  return (
    <notificationContext.Provider
      value={{ value: isNotificationClicked, toggle: toggleNotifications }}
    >
      {props.children}
    </notificationContext.Provider>
  );
}
