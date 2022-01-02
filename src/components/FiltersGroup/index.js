import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {clearFilters} = props
  const onClickFilterButton = () => {
    clearFilters()
  }

  const renderSearchBar = () => {
    const {changeSearchInput, searchInput} = props
    const onChangeSearchInput = event => {
      changeSearchInput(event.target.value)
    }

    const onEnterSearchInput = event => {
      const {enterSearchInputs} = props
      if (event.key === 'Enter') {
        enterSearchInputs()
      }
    }

    return (
      <div className="searchbar-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderNavbarSection = () => {
    const {categoryOptions} = props
    // console.log(categoryOptions)

    return (
      <ul className="category-list">
        {categoryOptions.map(eachOption => {
          const {changeCategory, activeCategory} = props
          const onClickCategoryItem = () =>
            changeCategory(eachOption.categoryId)
          const isCategoryActive = activeCategory === eachOption.categoryId
          const applyColorToCategory = isCategoryActive ? 'apply-color' : null
          return (
            <li
              key={eachOption.categoryId}
              className="options-list"
              onClick={onClickCategoryItem}
            >
              <p className={`list-item ${applyColorToCategory}`}>
                {eachOption.name}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderCategoryOptions = () => (
    <>
      <h1>Category</h1>
      {renderNavbarSection()}
    </>
  )

  const renderRatingsView = () => {
    const {ratingsList} = props
    return (
      <ul className="ratings-container">
        {ratingsList.map(eachRating => {
          const {changeRating, rating} = props
          const onClickRating = () => changeRating(eachRating.ratingId)
          const isClickedRating = rating === eachRating.ratingId
          const applyColorToRatingText = isClickedRating
            ? 'apply-color-to-rating'
            : null
          return (
            <li
              key={eachRating.ratingId}
              className="rating-list-item"
              onClick={onClickRating}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-image"
              />
              <p className={`up-text ${applyColorToRatingText}`}>& up</p>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderRatings = () => (
    <>
      <h1>Ratings</h1>
      {renderRatingsView()}
    </>
  )

  return (
    <div className="filters-group-container">
      {renderSearchBar()}
      {renderCategoryOptions()}
      {renderRatings()}
      <button
        type="button"
        className="clear-filters-button"
        onClick={onClickFilterButton}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
