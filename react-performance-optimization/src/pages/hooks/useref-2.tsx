import React, { useRef } from "react";
import Popup, { PopupRef } from "./components/Popup";

function App() {
  const popupRef = useRef<PopupRef>({} as PopupRef);

  const openPopup = () => {
    popupRef.current?.openPopup();
  };

  const closePopup = () => {
    popupRef.current?.closePopup();
  };

  return (
    <div>
      <h1>hook组件中使用 ref </h1>
      <div>
        <button onClick={openPopup}>打开弹窗</button>
      </div>
      <div>
        <button
          onClick={() => {
            popupRef.current?.openPopup({ company: "kingsoft", name: "张三" });
          }}
        >
          带参数打开弹窗
        </button>
      </div>
      <div>
        <button onClick={closePopup}>关闭弹窗</button>
      </div>
      <Popup
        onOk={(str) => {
          console.log("onOk", str);
        }}
        style={{ border: "1px solid red", padding: "0" }}
        ref={popupRef}
      />
      <div>
        <button
          onClick={() => {
            alert(
              popupRef.current?.getTestValue
                ? popupRef.current.getTestValue()
                : "没有值",
            );
          }}
        >
          获取子组件的值
        </button>
      </div>
    </div>
  );
}

export default App;
