interface Attributes {
  name: string;
  description: string;
  life: LifeSpan;
  male_weight: Weight;
  female_weight: Weight;
  hypoallergenic: boolean;
}

interface LifeSpan {
  max: number;
  min: number;
}

interface Weight {
  max: number;
  min: number;
}

interface Relationships {
  group: Group;
}

interface Group {
  data: GroupData;
}

interface GroupData {
  id: string;
  type: string;
}
export interface Breed {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}
