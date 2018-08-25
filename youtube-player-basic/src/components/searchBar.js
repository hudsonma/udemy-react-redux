import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      termPlaceholder: 'Search Criteria'
    };
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className="search-bar">
        <input
          placeholder = {this.state.termPlaceholder}
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar;
