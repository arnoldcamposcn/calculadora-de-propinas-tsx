import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  // const addItem = (item: MenuItem) => {
  //   const itemExist = order.find(orderItem => orderItem.id === item.id)
  //   if (itemExist) {
  //     const updatedOrder = order.map(OrderItem => OrderItem.id === item.id ?
  //       { ...OrderItem, quantity: OrderItem.quantity + 1 } :
  //       OrderItem
  //     )
  //     setOrder(updatedOrder)
  //   }

  //   const newItem = { ...item, quantity: 1 }
  //   setOrder([...order, newItem])

  // }

  const addItem = (item: MenuItem) => {
    setOrder(prevOrder => {
      const itemExist = prevOrder.find(orderItem => orderItem.id === item.id);

      if (itemExist) {
        const updatedOrder = prevOrder.map(orderItem =>
          orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        );
        return updatedOrder;
      } else {
        const newItem = { ...item, quantity: 1 };
        return [...prevOrder, newItem];
      }
    });
  };

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !==  id))
  }

  const placeOrder = () =>{
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}
