const tags = (client) => ({
  api: {
    async list() {
      const res = await client.get(`/tags`)
      return res.data
    },
  },
})

export default tags
