import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import makePhotoUrl from '../utils/makePhotoUrl'
import Layout from '../constants/Layout'
import { BG_COLOR } from '../constants/Colors'

const Container  = styled.View`
    flex: 1;
`
const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3};
    opacity: 0.5;

`

const MovieSlide = ({
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview,
    navigation
  }) => (
        <Container>
            <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
        </Container>
  )

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};


export default MovieSlide