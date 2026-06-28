export type ProfileType =
  | 'Self'
  | 'Partner'
  | 'Friend'
  | 'Family Member'
  | 'Child'
  | 'Business Partner'
  | 'Client'
  | 'Custom';

export interface Profile {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  dateOfBirth: string;
  gender: string;
  photo: string;
  notes: string;
  type: ProfileType;
  group: string;
  favorite: boolean;
  createdAt: number;
  updatedAt: number;
}

export type ProfileFormData = Omit<Profile, 'id' | 'createdAt' | 'updatedAt'>;
