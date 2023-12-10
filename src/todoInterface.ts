/**
 * 待辦事項介面已被移除，你需要自己定義一個新的待辦事項介面。
 * 待辦事項介面應該包含 id、task 和 completed 三個屬性，分別為數字型別、字串型別和布林型別。
 */

/**
 * 新增待辦事項
 * @param todos - 現有的待辦事項陣列
 * @param task - 新的待辦事項的內容
 *
 * 範例:
 * 輸入: ([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog')
 * 輸出: [{ id: 1, task: 'Buy milk', completed: false }, { id: 2, task: 'Walk the dog', completed: false }]
 */

interface ITodos {
  id: number;
  task: string;
  completed: boolean;
}

const createTodo = (todos: ITodos[], task: string): ITodos => {
  const lastTodo = todos.pop() as ITodos; // TODO 有沒有更好的寫法
  return {
    id: lastTodo?.id + 1,
    task,
    completed: false,
  };
};

export function addTodo(todos: ITodos[], task: string): ITodos[] {
  // 在此實現函式
  const newTodo = createTodo(todos, task);
  return [...todos, newTodo];
}
