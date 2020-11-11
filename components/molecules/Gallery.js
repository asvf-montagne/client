import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryProvider from 'react-photo-gallery'
import styles from './Gallery.module.css'

Gallery.propTypes = {
  images: PropTypes.array,
}

export default function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openModal = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeModal = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div className={styles.gallery}>
      <GalleryProvider photos={images} onClick={openModal} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeModal}>
            <Carousel currentIndex={currentImage} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
