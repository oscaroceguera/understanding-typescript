import React, {
  ReactElement,
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  title: string;
}

const defaultProfile: Profile = {
  firstName: 'Oscar',
  lastName: 'Oceguera',
  title: 'Software developer',
};

interface ProfileState {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

const defaultProfileState: ProfileState = {
  profile: defaultProfile,
  setProfile: (): void => {},
};

export const ProfileContext = createContext<ProfileState>(defaultProfileState);

export const useProfileContext = (): ProfileState => {
  return useContext(ProfileContext);
};

interface ProfileContextProviderProps {
  defaults?: Partial<Profile>;
  children?: ReactNode;
}

const ProfilePage = (): ReactElement => {
  const { profile } = useProfileContext();
  return (
    <div>
      <dt>First name: {profile.firstName}</dt>
      <dt>Last name: {profile.lastName}</dt>
      <dt>Title: {profile.title}</dt>
    </div>
  );
};

export const ProfileContextProvider = (
  props: ProfileContextProviderProps
): ReactElement => {
  const [profile, setProfile] = useState<Profile>({
    ...defaultProfile,
    ...props.defaults,
  });

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

const App = (): ReactElement => {
  // const defaults: ProfileContextProviderProps = {
  //   title: 'Designer',
  // };

  return (
    <ProfileContextProvider
      // defaults={defaults}
    >
      <ProfilePage />
    </ProfileContextProvider>
  );
};

export default App;
