import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import css from 'components/Searchbar/Searchbar.module.css';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchButtonSpan,
  SearchButtonInput,
} from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchInputValue: '',
  };

  handleInputChange = e => {
    this.setState({ searchInputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchInputValue.trim() === '') {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    this.props.onSubmit(this.state.searchInputValue);

    this.setState({ searchInputValue: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchButtonSpan>Search</SearchButtonSpan>
          </SearchButton>

          <SearchButtonInput
            type="text"
            name="searchInputValue"
            value={this.state.searchInputValue}
            onChange={this.handleInputChange}
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

/* <header className={css.Searchbar}>
  <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchForm__button}>
      <span className={css.SearchForm__button_label}>Search</span>
    </button>

    <input
      className={css.SearchForm__input}
      type="text"
      name="searchInputValue"
      value={this.state.searchInputValue}
      onChange={this.handleInputChange}
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>; */
