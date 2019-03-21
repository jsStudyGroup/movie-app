import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../../components/Loader'
import { BG_COLOR } from '../../constants/Colors'
import styled from 'styled-components'
import MovieSlider from '../../components/MovieSlider'

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`
const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
        {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
    </Container>
  )

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array
}

export default MoviesPresenter

