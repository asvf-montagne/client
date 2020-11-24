const uploader = (client) => ({
  api: {
    async upload(
      { file, caption, ref, refId, field, imageId },
      update = false,
    ) {
      const bodyFormData = new FormData()

      bodyFormData.append('ref', ref)
      bodyFormData.append('refId', refId)
      bodyFormData.append('field', field)

      if (!update) {
        bodyFormData.append('files', file, file.name)
      }

      if (caption !== undefined) {
        bodyFormData.append('fileInfo', JSON.stringify({ caption }))
      }

      try {
        return await client.post('/upload', bodyFormData, {
          params: {
            ...(update ? { id: imageId } : {}),
          },
        })
      } catch (error) {
        return error.response
      }
    },

    async delete(imageId) {
      try {
        return await client.delete('/upload/files/' + imageId)
      } catch (error) {
        return error.response
      }
    },
  },
})

export default uploader
