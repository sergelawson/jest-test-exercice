const addToEnd = (list: string[], animal: string) => {
  list.push(animal);
};

const addToBeginning = (list: string[], animal: string) => {
  list.unshift(animal);
};

export { addToEnd, addToBeginning };
