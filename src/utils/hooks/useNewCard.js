export const useNewCard = (type) => {
    console.log(type);
  const today = new Date();
  const date = new Date(new Date().setDate(today.getDate()))
    .toJSON()
    .slice(0, 10);
  const time = new Date(
    new Date().setTime(today.getTime() + 36 * Math.pow(10, 5))
  )
    .toJSON()
    .slice(11, 16);
  const newTask = {
    title: "CREATE NEW QUEST",
    difficulty: "easy",
    category: "learning",
    type,
    date,
    time,
    _id: "new",
    };
    console.log(newTask);
  return newTask;
};
