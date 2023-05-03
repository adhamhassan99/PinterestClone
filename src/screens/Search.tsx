import React, {useState} from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
`;

export const SearchBar = styled.TextInput`
  padding: 0;
  flex: 1;
  margin-left: 5px;
`;

export const SearchContainer = styled.Pressable`
  flex-direction: row;
  background-color: #eeeaea;
  margin: 20px 5px 10px 5px;
  border-radius: 20px;
  padding: 8px 15px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;

const Search = (props: Props) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();

  const handleSearch = (queryString: string) => {
    props.navigation.navigate('SearchDetail', {
      queryString,
    });
  };

  return (
    <PageContainer>
      <>
        <SearchContainer>
          {!searchFocused && (
            <MaterialCommunityIcons
              name="magnify"
              color={theme.colors.searchBarIcon}
              size={20}
            />
          )}
          <SearchBar
            onSubmitEditing={({nativeEvent: {text}}) =>
              text && handleSearch(text)
            }
            autoFocus={false}
            returnKeyType="search"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search Pinterest"
            placeholderTextColor={theme.colors.searchBarIcon}
            enablesReturnKeyAutomatically={true}
          />
          <MaterialCommunityIcons
            name="camera"
            color={theme.colors.searchBarIcon}
            size={20}
          />
        </SearchContainer>
      </>
    </PageContainer>
  );
};

export default Search;
