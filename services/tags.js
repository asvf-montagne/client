const tagsService = client => ({
  async list() {
    const res = await client.get(`/tags`);
    return res.data
  },
})

export default tagsService
