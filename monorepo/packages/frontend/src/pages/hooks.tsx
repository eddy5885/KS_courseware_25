import React, { useState } from "react";
import { Table, Tag, Select } from "antd";
// import { ColumnsType } from "antd/es/table";
import type { TableColumnsType } from 'antd';
import useFetchData from '../hooks/useFetchData';
import useResponsiveWidth from '../hooks/useResponsiveColumns';

const { Option } = Select;

export interface DataType {
  id: string;
  out_trade_no: string;
  order_status: string;
  is_send: boolean;
  count: number;
  ext2: string;
  price: number;
  from: string;
  c_openid: string;
  timeStamp: number;
  pay_level: string;
}

function App() {
  const [orderStatus, setOrderStatus] = useState<string>("");
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const {
    data = [],
    loading,
    total,
    // refreshData,
  } = useFetchData(current, pageSize, orderStatus);
  const onChange = (page: number) => {
    setCurrent(page);
  };

  const handleStatusChange = (value: string) => {
    setOrderStatus(value);
    setCurrent(1);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      align: "center",
      key: "id",
      fixed: "left",
      render: (id, data) => {
        const today = new Date();
        const date = new Date(data.timeStamp * 1000);
        const isToday = date.toDateString() === today.toDateString();
        if (isToday) {
          return <span style={{ color: "#cf1322" }}>{id}</span>;
        }
        return id;
      },
    },
    {
      title: "类型",
      dataIndex: "test_type",
      align: "center",
      key: "test_type",
      fixed: "left",
    },
    {
      title: "订单号",
      dataIndex: "out_trade_no",
      align: "center",
      key: "out_trade_no",
    },
    {
      title: "订单状态",
      dataIndex: "order_status",
      align: "center",
      key: "order_status",
      render: (status: string) => {
        const statusMap: Record<string, React.ReactNode> = {
          "0": <Tag color="red">未支付</Tag>,
          "1": <Tag color="blue">已支付</Tag>,
        };
        return statusMap[status] || status;
      },
    },
    {
      title: "价格",
      dataIndex: "price",
      align: "center",
      key: "price",
      render: (price, data) => {
        if (data.ext2 == "wechat") {
          return price / 100 + "元";
        } else if (data.ext2 == "alipay") {
          return price + "元";
        } else {
          return price;
        }
      },
    },
    {
      title: "支付等级",
      dataIndex: "pay_level",
      align: "center",
      key: "pay_level",
    },
    {
      title: "支付方式",
      dataIndex: "ext2",
      align: "center",
      key: "ext2",
      render: (ext2) => {
        if (ext2 == "wechat") {
          return "微信";
        } else if (ext2 == "alipay") {
          return "支付宝";
        } else {
          return ext2;
        }
      },
    },
    {
      title: "openID",
      dataIndex: "c_openid",
      align: "center",
      key: "c_openid",
    },

    {
      title: "支付时间",
      align: "center",
      dataIndex: "timeStamp",
      key: "timeStamp",
      render: (text) => {
        const today = new Date();
        const date = new Date(text * 1000);
        const isToday = date.toDateString() === today.toDateString();
        if (isToday) {
          return (
            <span style={{ color: "#cf1322" }}>{date.toLocaleString()}</span>
          );
        }
        return new Date(text * 1000).toLocaleString();
      },
    },
    {
      title: "是否赠送",
      dataIndex: "is_send",
      align: "center",
      key: "is_send",
      render: (isSend) => (isSend ? "是" : "否"),
    },
  ];

  const width = useResponsiveWidth();
  const filteredColumns = width < 430
    ? columns.filter(col => col.key !== 'pay_level' && col.key !== 'c_openid' && col.key !== 'is_send' && col.key !== 'out_trade_no' && col.key !== 'test_type')
    : columns;

  return (
    <div style={{ margin: "8px" }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 8 }}>订单状态筛选：</span>
        <Select
          style={{ width: 120 }}
          value={orderStatus}
          onChange={handleStatusChange}
        >
          <Option value="">全部</Option>
          <Option value="0">未支付</Option>
          <Option value="1">已支付</Option>
        </Select>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        data.length > 0 && (
          <>
            <div
              style={{ fontSize: "14px", textAlign: "right", margin: "10px" }}
            >
              总数据 : {total}条
            </div>
            <Table
              rowKey="out_trade_no"
              columns={filteredColumns}
              dataSource={data}
              size="small"
              pagination={{
                current,
                total: total,
                pageSize,
                onChange,
                onShowSizeChange: (current, size) => {
                  setPageSize(size);
                  setCurrent(1);
                },
              }}
            />
          </>
        )
      )}
    </div>
  );
}

export default App;
