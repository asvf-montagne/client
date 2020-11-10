const partnersService = (client) => ({
  async list() {
    const res = await client.get(`/partners`)
    return res.data.map((partner) => {
      return {
        name: partner.name,
        url: partner.logo.url,
        link: partner.link,
      }
    })
  },
})

export default partnersService
