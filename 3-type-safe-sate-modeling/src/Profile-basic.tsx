import React, { ReactElement, useState } from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  title: string;
}

interface ProfileState {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

/*
  Partial<Profile> allows us to pass any combination of the keys from the
  Profile interface (firstName, lastName, title), or none at all.
 */
export const useProfile = (overrides?: Partial<Profile>): ProfileState => {
  const defaultProfile: Profile = {
    firstName: 'Oscar',
    lastName: 'Oceguera',
    title: 'Software developer',
  };

  const [profile, setProfile] = useState<Profile>({
    ...defaultProfile,
    ...overrides,
  });

  return { profile, setProfile };
};

const ProfilePage = (): ReactElement => {
  const { profile } = useProfile({
    title: 'Designer',
  });
  return (
    <div>
      <dt>First name: {profile.firstName}</dt>
      <dt>Last name: {profile.lastName}</dt>
      <dt>Title: {profile.title}</dt>
    </div>
  );
};

export default ProfilePage;
