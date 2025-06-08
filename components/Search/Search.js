import React, {useRef} from 'react';
import {func, string} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Pressable, TextInput} from 'react-native';

// Styles
import style from './style';

const Search = ({onSearch, placeholder}) => {
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
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={search}
        onChangeText={handleChangeSearch}
      />
    </Pressable>
  );
};

Search.propTypes = {
  onSearch: func,
  placeholder: string,
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

export default Search;
