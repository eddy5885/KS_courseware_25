import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  useRef,
} from "react";
import { Modal } from "antd";

export interface PopupRef {
  openPopup: (options?: any) => void;
  closePopup: () => void;
  getTestValue:()=>void;
}
export interface PopupProps {
  onOk?: (s: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Popup = forwardRef<PopupRef, PopupProps>((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [obj, setobj] = useState<any>({});
  const inputRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    openPopup: (options) => {
      console.log("弹窗打开");
      setIsModalOpen(true);
      if (options) {
        setobj(options);
      }
      // 弹窗打开的逻辑
    },
    closePopup: () => {
      console.log("弹窗关闭");
      setIsModalOpen(false);
      // 弹窗关闭的逻辑
    },
    getTestValue: () => inputRef.current?.value,
  }));
  const onOk = useCallback(() => {
    props.onOk?.("something");
    setIsModalOpen(false);
  }, []);

  const onCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const { className = "", style = {} } = props;
  return (
    <Modal
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      className={className}
      style={style}
    >
      <div>这里是弹窗的内容</div>
      <h1>{Object.keys(obj).length > 0 ? "编辑" : "添加"}</h1>
      <div>
        {Object.keys(obj).length > 0 ? <div>{JSON.stringify(obj)}</div> : null}
      </div>
      <div>
        <input ref={inputRef} type="text" />
      </div>
    </Modal>
  );
});

export default Popup;
