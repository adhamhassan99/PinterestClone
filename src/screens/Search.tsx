import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

type Props = {};

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
`;

const SearchBar = styled.TextInput`
  padding: 0;
  flex: 1;
  margin-left: 5px;
`;

const SearchContainer = styled.Pressable`
  flex-direction: row;
  background-color: #eeeaea;
  margin: 20px 5px 10px 5px;
  border-radius: 20px;
  padding: 5px 10px;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;

const Search = (props: Props) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();
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
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search Pinterest"
            placeholderTextColor={theme.colors.searchBarIcon}
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
