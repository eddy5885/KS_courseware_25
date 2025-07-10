import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const answersKey = "_ANSWERS";

// 定义Context的类型
interface UserContextType {
  userAnswers: Record<number, string>;
  setUserAnswers: (
    answers:
      | Record<number, string>
      | ((prev: Record<number, string>) => Record<number, string>)
  ) => void;
}

// 创建用户信息的Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 创建提供用户信息的Provider组件
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  // 从localStorage中获取初始用户数据，如果不存在则使用默认值
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const storedAnswers = localStorage.getItem(answersKey);
    if (storedAnswers) {
      setUserAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem(answersKey, JSON.stringify(userAnswers));
  }, [userAnswers]);

  return (
    <UserContext.Provider value={{ userAnswers, setUserAnswers }}>
      {children}
    </UserContext.Provider>
  );
};

// 自定义钩子，方便在组件中获取用户信息相关的Context值
const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export { UserContextProvider, useUserContext };
