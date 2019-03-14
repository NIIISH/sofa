
export interface Step {

  numberOfStep: number;
  title: string;
  description: string;
  need: string;
}

export interface Steps {

  lang: string;
  steps: Step[];

}
