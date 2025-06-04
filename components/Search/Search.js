import React, {useRef} from 'react';
import {func} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Pressable, TextInput} from 'react-native';

// Styles
import style from './style';

const Search = ({onSearch}) => {
  const [search, setSearch] = React.useState('');
  const textInputRef = useRef(null);

  const handleFocusSearch = () => {
    textInputRef.current.focus();
  };

  const handleChangeSearch = text => {
    setSearch(text);
    onSearch(text);
  };

  return (
    <Pressable style={style.searchContainer} onPress={handleFocusSearch}>
      <FontAwesomeIcon icon={faSearch} style={style.searchIcon} />
      <TextInput
        style={style.searchInput}
        ref={textInputRef}
        placeholder="Search"
        placeholderTextColor="#999"
        value={search}
        onChangeText={handleChangeSearch}
      />
    </Pressable>
  );
};

Search.propTypes = {
  onSearch: func,
};

Search.defaultProps = {
  onSearch: () => {},
};

export default Search;
