export type TalentData = {
  link: string;
  firstName: string;
  lastName: string;
  nickName: string;
  color: string;
  description: string;
  VA: { firstName: string; lastName: string };
  role: string;
  audio: string;
};

export interface ITalentContainer {
  index: number;
  data: TalentData;
}

export type AudioState = "active" | "inactive" | "paused";
