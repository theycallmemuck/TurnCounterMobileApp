export type Player = {
  name: string; // same as ID
  time: number; // whole taken time for turns
  turns: number; // turns count
  totalTime: number; // total turn time
  color: string; // color picked by user in HEX format '#000000'
};
